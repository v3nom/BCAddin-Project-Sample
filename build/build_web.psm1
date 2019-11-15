function Build-Web {
    Push-Location $Env:WEB
    npx webpack
    Pop-Location
}