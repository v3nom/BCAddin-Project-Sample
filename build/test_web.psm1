function Test-Web {
    Push-Location $Env:WEB
    npm t
    Pop-Location
}