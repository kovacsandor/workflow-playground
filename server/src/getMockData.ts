export function getMockData<T>(data: T): Promise<T> {
    
    return new Promise<T>((resolve: (value: T) => void, reject: (reason?: any) => void): void => {

        setTimeout(
            () => {

                resolve(data)
            },
            1000,
        );
    })
}
