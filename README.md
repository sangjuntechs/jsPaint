# jsPaint
From nomad coder custom sangjun
javascript로 그림을 그릴 수 있는 보드를 빌드하는 프로젝트
2020/04/30 프로젝트 시작

# 2020/04/30
html css 기본 틀 작업 캔버스 보드와 컬러박스 나열

# 2020/05/01
css 작업 및 app.js 코드 추가
app.js : onmouse/mousedown/mouseup/leavemouse 을
이용하여 캔버스 내에서의 마우스의 움직임 값을
받는 코드 작성. 콘솔 로그를 통해 클릭시 paint가 시작되는 것과 클릭을 유지하지 않거나 캔버스 밖으로 벗어나는 경우 paint 작업이 종료되는 것을 확인함.

app.js add code: canvas의 getContext("2d");를 통해
painting이 false일 때 Path를 가져와 offset 좌표값을 읽고 있다가 painting이 true가 되면 path가 마지막에 있던 좌표부터 저장된 strokeStyle의 정보로 선을 긋는다. painting이 true가 되는 구간은 mousedown일 때 이다. 오후 09시 14분

# 2020/05/02

app.js add code : 각각의 컬러가 담긴 div에 클래스명을 추가해 Array 형식으로 만든 뒤 clickevent의 target으로 background컬러를 지목하여 strokeStyle을 그 div의 backgroundColor로 바꾸었다. 그 결과 밑에 팔레트의 div를 선택하면 그 div의 색상으로 바뀐 페인트를 칠할 수 있게 되었다.

app.js brush 사이즈를 input range값으로 변경하여 칠할 수 있게 되었고, fill과 brush를 구분하기 위한 버튼 변경 작업을 하였다. range 값의 이벤트를 타겟으로 value값을 가져와 ctx.lineWidth의 값을 value값으로 변경하여 브러쉬 사이즈를 조정할 수 있는 기능을 추가.

# 2020/05/03
add app.js code
캔버스의 ctx.fillStyle 및 fillRect를 통해서 fill버튼 클릭시 filling 조건문으로 캔버스 전체를 칠할 수 있는 코드 삽입.

contextMenu의 preventDefault() 로 우클릭 방지

canvas의 toDataURL을 통해 이미지의 방식을 정했고, link라는 a태그를 통해 저장 그리고 link.href 와 download를 통해 url에 저장된 이미지를 다운로드 받을 수 있는 기능을 세이브버튼의 click이벤트리스너로 구현하였다.

**2020/05/03 javascript 캔버스 프로젝트 종료**

html5의 canvas에 대한 많은 이해가 가능했다. 그 외에도 자바스크립트로 구현 가능한 많은 것들과 이벤트 리스너를 통한 많은 기능을 구현해 볼 수 있었던 것 같다.