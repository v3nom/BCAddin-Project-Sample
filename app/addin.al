controladdin DemoAddin
{
    Scripts = 'Scripts/bundle.js';
    StartupScript = 'Scripts/start.js';

    RequestedWidth = 800;
    RequestedHeight = 450;
    MinimumWidth = 800;
    MinimumHeight = 450;
    MaximumWidth = 800;
    MaximumHeight = 450;
    HorizontalShrink = true;
    VerticalShrink = true;
    HorizontalStretch = true;
    VerticalStretch = true;

    event ControlReady()

    event UserInput(value: Text)

    procedure Message(value: Text)
}