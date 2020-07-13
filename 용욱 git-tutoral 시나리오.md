# git tutorial



[TOC]







## 파일 구성

### App.vue

  - #### Header

      - SearchBar
      - git 공부? (router links)
      - git 실습? (router links)
      - contact us

  - #### Sidebar

      - git init (router links)
      - ...
      - git branch (router links)
          - git branch checkout (data-scroll)
          - git branch -d (data-scroll)
    - ...

- #### Container

  - title
  - 기본 content
    - sub title (data-scroll)
    - content
    - animation
    - ...
  - 실습 content
    - animation
    - terminal
    - 동적요소
    - ...
  
- #### Practice

     - git 로직을 구현하여 사용해볼 수 있게 하는 부분







## contents



### 1. 깃 소개

> - 원하는 시점마다 깃발을 꽂고, 팀이 만든 깃발 어느곳이든 이동 가능
> - 수습하기 어려운 실수를 했거나, 전이랑 뭐가 바뀌었는지 헷갈릴 때, 언제든 폴더 내 상태를 과거로 돌릴 수 있음, 여러 평행우주를 만들어서 실험적인 작업도 할 수 있음.
> - 깃: 버전관리 툴, 시간여행이 가능한 평행 우주들을 만드는 것
> - 깃만을 사용할수도 있음. 이를 온라인으로 다른사람들과 공유하기 위해서 깃헙, 깃랩과 같은 서비스를 사용하는 것임. 깃과 깃헙은 서로 같은 개념이 아니고, 깃을 온라인으로 보여주는 서비스가 깃헙임. 



#### 준비물

#### 사이드바 구조

> - git설치(링크)
> - 프로젝트를 시작할 폴더 생성
> - ide 터미널 







### 2. git 기본설정과 git init



#### 사이드바 구조

> - .gitignore
>
> - git log
>
> - git config
>   
>   - 기본
>     - git config user.username
>     - git config user.email
>   - --global
>   
> - git init
>
> - git remote
>   - origin이란
>   - add origin
>   - -v
>   
>   
>



#### git config

- git을 처음 시작하게 되면 `git config` 과정을 진행해야 합니다.
- `git config` 명령을 통해 계정에 대한 정보를 설정합니다.
- `git config --global user.name 유저이름`
- `git config --global user.email 이메일`
- `git config --list`를 통해 `user.name`, `user.email`이 잘 들어갔는지 확인합니다.



#### git log (commit 내역만 보이므로 commit으로 옮기면 좋을 듯)

- 



#### git init

- 새로운 깃 저장소가 만들어집니다.
- clone을 받은 경우에는 필요하지 않습니다.



#### git remote

- clone의 경우에는 알아서 등록됨
- 내 프로젝트가 저장될 원격 저장소의 주소를 입력하는 부분
- `git remote add origin 원격저장소주소`
- github에서 레포를 만든 뒤 clone버튼을 누르게 되면 SSH 주소와 HTTPS 주소가 나오게 된다. HTTPS 주소를 복사에 붙여야 한다.
- 복사는 우클릭 => 복사(paste), ctrl + c는 안됨
- `git remote -v`를 이용해서 등록한 주소 확인 가능
- 만약 잘못 입력했다면, `git remote set-url origin 원격저장소주소`를 이용해 바꿀 수 있음
- `git remote -v`를 통해 확인 가능하며, 2개의 url이 나오는것이 정상임(fetch)와 (push)







### 3. git add



#### 사이드바 구조

> - staged 상태란
> - git status
> - git add
>   - git add .
>   - git add 특정파일



#### staged 상태란?

- 이전 버전과 달라진 변경내용을 찾아내는 단계, add를 실행하면 변경 내용이 staged상태로 바뀌게 된다.
- *로봇의 이전 전과 설계가 변경된 부분을 찾아 내는 단계, add를 실행하면 변경 내용을 찾아 기억하고 있게 된다*



#### git status

- 파일중에 수정된 것, 새로 만들어진것, 삭제된것을 추적, 이전과 달라진 점을 사용자에게 보여줌
- add 이전에는 빨간색으로, 이후에는 초록색으로 나타납니다.





#### git add

- 







## 출처

git 공식문서 - pro git book

https://git-scm.com/book/ko/v2

어떻게 깃을 사용하는지 빠르게 알아봅시다

https://github.com/KennethanCeyer/tutorial-git

누구나 쉽게 이해할 수 있는 Git 입문

https://backlog.com/git-tutorial/kr/intro/intro2_3.html

git - 간편 안내서

https://rogerdudler.github.io/git-guide/index.ko.html

git 초보를 위한 풀리퀘스트(pull request) 방법

https://wayhome25.github.io/git/2017/07/08/git-first-pull-request-story/

생활코딩 - git source tree

https://opentutorials.org/course/1492

초심자를 위한 Github 협업 튜토리얼 (with 토끼와 거북이)

https://milooy.wordpress.com/2017/06/21/working-together-with-github-tutorial/

git magic

http://www-cs-students.stanford.edu/~blynn/gitmagic/intl/ko/index.html





github 공식사이트, 유튜브, 공식문서

https://services.github.com/

https://www.youtube.com/GitHubGuides

https://github.github.com/training-kit/downloads/kr/github-git-cheat-sheet/

