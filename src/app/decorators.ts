export function LocalStoragePersist() {
    return function (target: Object, propertyKey: string) {
        let value: string;
        const getter = function () {
            const json = localStorage.getItem(propertyKey);
            const obj = json
                ? JSON.parse(json)
                : null;
            return obj;
        };
        const setter = function (newValue: any) {
            const json = JSON.stringify(newValue);
            localStorage.setItem(propertyKey, json);
            value = newValue;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    }
}
