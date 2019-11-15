page 50100 DemoAddinpage
{
    PageType = Card;
    ApplicationArea = All;
    UsageCategory = Lists;
    Editable = false;

    layout
    {
        area(Content)
        {
            usercontrol(addin; DemoAddin)
            {
                ApplicationArea = All;
                trigger ControlReady()
                begin

                end;

                // Value is received from the browser addin
                trigger UserInput(value: Text)
                var
                    ok: Boolean;
                begin
                    ok := Dialog.Confirm('AL: Do you accept new value?');
                    if ok then begin
                        CurrPage.addin.Message(Format(value, 0, 'Message from AL: <Text>, has been accepted!'));
                    end else begin
                        Dialog.Message('AL: User rejected the value from browser addin');
                    end;
                end;
            }
        }
    }
}