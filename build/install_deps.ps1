$webProjectPath = $PSScriptRoot + "\..\web"

Push-Location $webProjectPath
npm i
Pop-Location