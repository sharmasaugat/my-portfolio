

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