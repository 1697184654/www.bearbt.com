@echo off

echo ----------------------------------------------------------------
echo ---------------------�������ʾ����Ҫ��������Դ-----------------
echo ----------------------------------------------------------------

set /p keywords=��������Ҫ�����Ĺؼ��֣�

node index.js %keywords%
start %keywords%.txt
pause