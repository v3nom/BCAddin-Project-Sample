$webProjectPath = $PSScriptRoot + "\..\web"

Push-Location $webProjectPath
npx webpack
Pop-Location