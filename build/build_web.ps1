$webProjectPath = $PSScriptRoot + "\..\web"

Push-Location $webProjectPath
webpack
Pop-Location