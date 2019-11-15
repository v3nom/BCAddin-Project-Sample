function Install-Dependencies {
    Push-Location $Env:WEB
    npm i
    Pop-Location
}
