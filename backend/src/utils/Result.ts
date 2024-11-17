
export class Result<T> {
    public readonly isSuccess: boolean;
    public readonly isFailure: boolean;
    public readonly error: string;
    private readonly _value: T;

    private constructor(isSuccess: boolean, error?: string, value?: T) {
        this.isSuccess = isSuccess;
        this.isFailure = !isSuccess;
        this.error = error!;
        this._value = value!;

        Object.freeze(this);
    }

    public getValue(): T {
        if (!this.isSuccess) {
            throw new Error('Cannot get the value of a failed result.');
        }
        return this._value;
    }

    public static ok<U>(value?: U): Result<U> {
        return new Result<U>(true, undefined, value);
    }

    public static fail<U>(error: string): Result<U> {
        return new Result<U>(false, error);
    }

    public static combine(results: Result<any>[]): Result<any> {
        for (const result of results) {
            if (result.isFailure) return result;
        }
        return Result.ok();
    }
}