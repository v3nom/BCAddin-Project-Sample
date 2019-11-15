$Env:WEB = $PSScriptRoot + "\web"

# Import the module with "generate" functions
gci -Recurse .\build -Filter *.psm1 | % {
    Remove-Module ([io.path]::GetFileNameWithoutExtension($_)) -ErrorAction Ignore
    Import-Module (join-path $_.DirectoryName $_.PSChildName) -DisableNameChecking
}
