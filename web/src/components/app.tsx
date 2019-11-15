import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Button } from 'office-ui-fabric-react/lib/Button';
import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';

// Sends user value back to AL
function sendInputToAL(value: string) {
    Microsoft.Dynamics.NAV.InvokeExtensibilityMethod("UserInput", [value]);
}

// Main React component
export const AppComponent = (props: { message?: string }) => {
    const [value, setValue] = React.useState(props.message);
    return <Fabric>
        {props.message && <MessageBar messageBarType={MessageBarType.success}>{props.message}</MessageBar>}
        <TextField value={value} autoComplete='off' onChange={(_, newValue) => setValue(newValue)} placeholder="Enter your value" />
        <Button onClick={() => sendInputToAL(value)}>Submit</Button>
    </Fabric>;
};
