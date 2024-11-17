/**
 * @class TokenBucket
 * @description Token Bucket algorithm implementation for rate limiting
 * 
 * Algorithm details:
 * - Time complexity: O(1) for both consume and refill
 * - Memory footprint: O(1) per bucket instance
 * 
 * Design decisions:
 * - Uses floating-point tokens for smooth rate limiting
 * - Lazy refill strategy to optimize performance
 * - Thread-safe operations
 * 
 * Usage patterns:
 * - Create one bucket per rate-limited resource
 * - Configure capacity based on burst requirements
 * - Set refill rate based on sustained throughput needs
 */
interface TokenBucketConfig {
    capacity: number;      
    refillRate: number;
}

export class TokenBucket {
    private tokens: number;
    private lastRefill: number;

    constructor(private config: TokenBucketConfig) {
        this.tokens = config.capacity;
        this.lastRefill = Date.now();
    }

    consume(tokens: number = 1): boolean {
        this.refill();

        if (this.tokens >= tokens) {
            this.tokens -= tokens;
            return true;
        } else {
            return false;
        }
    }

    private refill() {
        const now = Date.now();
        const elapsedSeconds = (now - this.lastRefill) / 1000;
        this.tokens = Math.min(
            this.tokens + elapsedSeconds * this.config.refillRate,
            this.config.capacity
        );

        this.lastRefill = now;
    }
}