# One-time setup: init, add, commit. Then open GitHub to create repo and push.
$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "Git not found. Install Git and ensure it's in your PATH." -ForegroundColor Red
    exit 1
}

if (-not (Test-Path .git)) {
    git init
    git branch -M main
    Write-Host "Initialized git repo on main." -ForegroundColor Green
}

git add -A
$status = git status --porcelain
if (-not $status) {
    Write-Host "Nothing to commit (already clean)." -ForegroundColor Yellow
} else {
    git commit -m "Add GitHub Pages deploy"
    Write-Host "Committed." -ForegroundColor Green
}

$remote = git remote get-url origin 2>$null
if (-not $remote) {
    Write-Host ""
    Write-Host "No remote set. Do this:" -ForegroundColor Cyan
    Write-Host "  1. Create a new repo on https://github.com/new (e.g. name: NYPage26)" -ForegroundColor White
    Write-Host "  2. Do NOT add README/.gitignore (repo empty)" -ForegroundColor White
    Write-Host "  3. Run:" -ForegroundColor White
    Write-Host '     git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git' -ForegroundColor Gray
    Write-Host '     git push -u origin main' -ForegroundColor Gray
    Write-Host "  4. Repo Settings -> Pages -> Source: GitHub Actions" -ForegroundColor White
    Start-Process "https://github.com/new?name=NYPage26"
} else {
    Write-Host "Pushing to $remote ..." -ForegroundColor Cyan
    git push -u origin main
    Write-Host "Done. Enable Pages: Repo -> Settings -> Pages -> Source: GitHub Actions" -ForegroundColor Green
}
