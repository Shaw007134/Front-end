@echo off     
echo *******文件批量重命名*******   
echo.
echo.
 
 
set /p filename=请输入文件名前缀:
IF "%filename%"=="" set "filename=%%~ni"
 
set /p suffix=请输入文件类型:
IF "%suffix%"==""   echo.文件类型不能为空 &goto error
IF NOT EXIST *.%suffix% echo.不存在该格式文件 &goto error
 
setlocal ENABLEDELAYEDEXPANSION
for /r %%i in (.) do (
        set n=1000
        for /f "delims=" %%a in (' dir /b "%%i\*.%suffix%" 2^>nul ') do (
                set /a n+=1
                ren "%%i\%%a" "%filename%"!n:~1!%%~xa
        )
)
 
echo. &pause
exit
 
:error
echo. &pause