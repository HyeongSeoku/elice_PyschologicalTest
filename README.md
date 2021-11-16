<h1>3기_직업심리검사_이름</h1>

## Elice Ai트랙 3기 레이서 김형석의 직업 심리 검사 서비스 프로젝트입니다.

</br>

## 구현 사항

---

<br/>

<h3 style="color:#EE5757; border-radius:5px; display:inline-block; background-color:#EDEDEB; font-weight: 600;">필수</h3>

- <h4 style="color:#EE5757; display:inline-block; font-weight: 600;">검사 시작시, 유저 설정</h4>

  - [✅] **이름**을 입력할 수 있는 input form을 구현합니다.
  - [✅] **성별**을 선택할 수 있는 input form을 구현합니다.
  - [✅] 이름 혹은 성별을 기입하지 않거나 선택하지 않을 경우 **검사 시작 버튼이 비활성화** 되어야 합니다.

<br/>

- <h4 style="color:#EE5757; display:inline-block; font-weight: 600;">검사 예시 페이지</h4>

  - [ ] 검사를 시작하기 전 앞으로의 진행 방식에 대해서 설명하는 페이지를 구현합니다.
  - [ ] 진행 방식에 대한 검사 예제 문항이 한 문항을 화면에 표시합니다.
  - [ ] **검사 시작 버튼**을 구현합니다.

<br/>

- <h4 style="color:#EE5757; display:inline-block; font-weight: 600;">검사 진행 페이지</h4>

  - [ ] **페이지 당 5개의 문항**이 보여야 합니다.
  - [ ] 페이지 내 문항을 모두 진행하기 전까지는 **"다음" 버튼**이 **비활성화 상태**여야 합니다.

<br/>

- <h4 style="color:#EE5757; display:inline-block; font-weight: 600;">검사 완료 페이지</h4>

  - [ ] **검사가 완료되었다는 문구**를 포함해야 하며, **검사결과에 대한 간단한 문장**을 포함해야 합니다.

<br/>

- <h4 style="color:#EE5757; display:inline-block; font-weight: 600;">결과표 페이지</h4>

  - [ ] 유저의 기본 정보를 포함해야 합니다. (이름, 성별, 검사일)
  - [ ] 직업가치관결과에 대하여 항목 별로 수치를 표기해야 합니다. (ex. 막대 그래프)
  - [ ] 가치관과 관련이 높은 직업을 결과에 따라 분류하여 표기해야 합니다.
  - [ ] "다시 검사하기" 버튼 클릭 시, 진행했던 항목에 대한 기록은 모두 초기화되어야 합니다.

<br/>

---

<br/>

<h3 style="color:#5662F6; border-radius:5px; display:inline-block; background-color:#EDEDEB; font-weight: 600;">선택</h3>

- <h4 style="color:#5662F6; display:inline-block; font-weight: 600;">검사 시작 시, 유저 설정</h4>

  - [✅] **이름을 올바르게 입력하지 않았을 경우** , 이에 대한 **안내 메세지를 출력** 합니다.
  - [ ] **성별을 선택하지 않았을 경우** , 이에 대한 **안내 메세지를 출력**합니다.

<br/>

- <h4 style="color:#5662F6; display:inline-block; font-weight: 600;">검사 예시 페이지</h4>

  - [ ] **검사 예제 문항을 진행하지 않으면** 검사 시작 버튼이 비활성화 되어야 합니다.
  - [ ] 검사 예시 페이지부터는 **진행 표시줄(Progress bar)** 가 포함 되어야 있어야 하며, 검사 예시 페이지는 0%로 측정되어야 합니다.(진행 표시줄의 형태는 무관합니다.)

<br/>

- <h4 style="color:#5662F6; display:inline-block; font-weight: 600;">검사 진행 페이지</h4>

  - [ ] 각 문항을 선택할 때 마다 **진행 표시줄과 퍼센트(%)가 갱신**되어야 합니다.
  - [ ] "이전" 버튼을 클릭했을 때, **이전 페이지 문항에서 선택한 값이 유지된 상태**여야 합니다.
