$Env:WEB = $PSScriptRoot + "\web"
$buildFolder = $PSScriptRoot + ".\build"

# Import the module with "generate" functions
gci -Recurse $buildFolder -Filter *.psm1 | % {
    Remove-Module ([io.path]::GetFileNameWithoutExtension($_)) -ErrorAction Ignore
    Import-Module (join-path $_.DirectoryName $_.PSChildName) -DisableNameChecking
}

# Install npm packages if first run
if (-not (Test-Path "$Env:WEB\node_modules")) {
    Install-Dependencies
}
