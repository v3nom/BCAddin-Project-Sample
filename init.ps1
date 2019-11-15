$Env:WEB = $PSScriptRoot + "\web"

function Install-Dependencies {
    Push-Location $Env:WEB
    npm i
    Pop-Location
}

# Import the module with "generate" functions
gci -Recurse .\build -Filter *.psm1 | % {
    Remove-Module ([io.path]::GetFileNameWithoutExtension($_)) -ErrorAction Ignore
    Import-Module (join-path $_.DirectoryName $_.PSChildName) -DisableNameChecking
}
