$webProjectPath = $PSScriptRoot + "\..\web"

Push-Location $webProjectPath
npm t
Pop-Location