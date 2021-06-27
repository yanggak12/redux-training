# Vanilla Redux

Training Vanilla-Redux !!
(nomad coder - 초보자를 위한 리덕스 101)

## 1. Store

    - 너의 데이터를 넣는 곳(state)
    - state는 너의 앱에서 바뀌는 데이터
    - createstore는 반드시 reducer를 매개변수로 넣어줘야한다.

## 2. reducer

    - reducer는 너의 데이터를 변경해주는 함수
    - reducer만이 너의 데이터를 변경할 수 있어
    - reducer의 데이터를 변경하는 것은 action !

## 3. Action

    - action은 Reducer가 어떻게 데이터를 변경할지 알려준다.
    - action은 reducer에 어떻게 데이터를 변경할 지 알려주기 위해 dispatch의 도움을 받는다.

## 4. Dispatch

    - dispatch는 reducer에 action을 전달해준다.
    - dispatch는 반드시 객체형이어야 한다.
