declare var Microsoft: {
    Dynamics: {
        NAV: {
            /**
             * Invokes AL trigger with provided values
             * @param alTriggerName AL trigger name
             * @param values Trigger value array
             */
            InvokeExtensibilityMethod(alTriggerName: string, values: any[]): void;
        }
    }
};