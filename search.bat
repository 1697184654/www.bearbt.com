@echo off

echo ----------------------------------------------------------------
echo ---------------------请根据提示输入要搜索的资源-----------------
echo ----------------------------------------------------------------

set /p keywords=请输入您要搜索的关键字：

node index.js %keywords%
set path=%~dp0
if exist %path%%keywords%.txt (
	start %keywords%.txt
) else (
    echo -----------------文件不存在，没有您搜索的资源------------
	pause
)
