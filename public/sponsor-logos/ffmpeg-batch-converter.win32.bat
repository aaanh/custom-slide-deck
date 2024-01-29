@echo off
setlocal enabledelayedexpansion

set counter=0
set max_instances=4

for %%a in ("*.webp*") do (
  set /a counter+=1
  set /a counter_mod=!counter! %% !max_instances!
  if !counter_mod! equ 0 (
    @REM start "" "ffmpeg" -i "%%a" -y -c:v prores_ks -profile:v proxy -pix_fmt yuv422p10le -vendor ap10 -bits_per_mb 8000  -vf "scale=1920:1080" -c:a pcm_s16le -ar 48K "..\%%~na.mov"
    start "" "ffmpeg" -i "%%a" ".\%%~na.png"
  ) else (
    ffmpeg -i "%%a" ".\%%~na.png"
  )
)