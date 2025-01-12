const quizDataSets = {
    set1: {
        name: "상식 입문",
        questions: [
            {
                id: 1,
                type: "multiple",
                question: "태양계에서 가장 큰 행성은?",
                options: ["목성", "토성", "천왕성", "해왕성"],
                correct: "목성",
                category: "상식",
                difficulty: "easy"
            },
            {
                id: 2,
                type: "truefalse",
                question: "대한민국의 국화는 무궁화이다.",
                options: ["O", "X"],
                correct: "O",
                category: "상식",
                difficulty: "easy"
            },
            {
                id: 3,
                type: "multiple",
                question: "인체의 뼈 개수는 몇 개?",
                options: ["206개", "186개", "226개", "246개"],
                correct: "206개",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 4,
                type: "multiple",
                question: "세계에서 가장 긴 강은?",
                options: ["나일강", "아마존강", "양쯔강", "미시시피강"],
                correct: "나일강",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 5,
                type: "truefalse",
                question: "피라미드는 고대 이집트의 왕들의 무덤이다.",
                options: ["O", "X"],
                correct: "O",
                category: "상식",
                difficulty: "easy"
            },
            {
                id: 6,
                type: "multiple",
                question: "DNA의 구조를 발견한 과학자는?",
                options: ["왓슨과 크릭", "아인슈타인", "뉴턴", "멘델"],
                correct: "왓슨과 크릭",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 7,
                type: "multiple",
                question: "물의 화학식은?",
                options: ["H2O", "CO2", "O2", "N2"],
                correct: "H2O",
                category: "상식",
                difficulty: "easy"
            },
            {
                id: 8,
                type: "truefalse",
                question: "지구에서 가장 깊은 해구는 마리아나 해구이다.",
                options: ["O", "X"],
                correct: "O",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 9,
                type: "multiple",
                question: "인류 최초로 달에 착륙한 우주인은?",
                options: ["닐 암스트롱", "버즈 올드린", "유리 가가린", "존 글렌"],
                correct: "닐 암스트롱",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 10,
                type: "multiple",
                question: "세계에서 가장 높은 산은?",
                options: ["에베레스트", "K2", "킬리만자로", "매킨리"],
                correct: "에베레스트",
                category: "상식",
                difficulty: "easy"
            }
        ]
    },
    set2: {
        name: "상식 입문",
        questions: [
            {
                id: 11,
                type: "truefalse",
                question: "토마토는 과일이 아닌 채소이다.",
                options: ["O", "X"],
                correct: "X",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 12,
                type: "multiple",
                question: "인간의 심장은 몇 개의 방으로 이루어져 있나?",
                options: ["4개", "2개", "3개", "6개"],
                correct: "4개",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 13,
                type: "multiple",
                question: "빛의 삼원색은?",
                options: ["빨강, 초록, 파랑", "빨강, 노랑, 파랑", "빨강, 보라, 주황", "노랑, 파랑, 초록"],
                correct: "빨강, 초록, 파랑",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 14,
                type: "truefalse",
                question: "개미는 뼈가 있다.",
                options: ["O", "X"],
                correct: "X",
                category: "상식",
                difficulty: "easy"
            },
            {
                id: 15,
                type: "multiple",
                question: "지구에서 가장 큰 대륙은?",
                options: ["아시아", "아프리카", "북아메리카", "남아메리카"],
                correct: "아시아",
                category: "상식",
                difficulty: "easy"
            },
            {
                id: 16,
                type: "multiple",
                question: "사람의 피부색을 결정하는 색소는?",
                options: ["멜라닌", "헤모글로빈", "케라틴", "콜라겐"],
                correct: "멜라닌",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 17,
                type: "truefalse",
                question: "남극은 대륙이지만 북극은 바다이다.",
                options: ["O", "X"],
                correct: "O",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 18,
                type: "multiple",
                question: "세계에서 가장 넓은 나라는?",
                options: ["러시아", "중국", "미국", "캐나다"],
                correct: "러시아",
                category: "상식",
                difficulty: "easy"
            },
            {
                id: 19,
                type: "multiple",
                question: "인체에서 가장 큰 장기는?",
                options: ["피부", "간", "폐", "소장"],
                correct: "피부",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 20,
                type: "truefalse",
                question: "모든 거미는 8개의 눈을 가지고 있다.",
                options: ["O", "X"],
                correct: "X",
                category: "상식",
                difficulty: "hard"
            }
        ]
    },
    set3: {
        name: "뇌력 테스트",
        questions: [
            {
                id: 21,
                type: "multiple",
                question: "인간의 뇌 무게는 평균 몇 그램인가?",
                options: ["1400g", "1200g", "1600g", "1800g"],
                correct: "1400g",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 22,
                type: "truefalse",
                question: "벼룩은 자신의 몸길이의 100배 이상을 뛸 수 있다.",
                options: ["O", "X"],
                correct: "O",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 23,
                type: "multiple",
                question: "세계에서 가장 많이 사용되는 언어는?",
                options: ["중국어", "영어", "스페인어", "힌디어"],
                correct: "중국어",
                category: "상식",
                difficulty: "easy"
            },
            {
                id: 24,
                type: "multiple",
                question: "인류가 발명한 최초의 금속은?",
                options: ["구리", "철", "금", "은"],
                correct: "구리",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 25,
                type: "truefalse",
                question: "지구의 중심부는 액체 상태이다.",
                options: ["O", "X"],
                correct: "O",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 26,
                type: "multiple",
                question: "사람의 손가락 지문은 언제부터 형성되는가?",
                options: ["태아 3개월", "태아 6개월", "출생 직후", "생후 1개월"],
                correct: "태아 3개월",
                category: "상식",
                difficulty: "hard"
            },
            {
                id: 27,
                type: "multiple",
                question: "세계에서 가장 작은 국가는?",
                options: ["바티칸", "모나코", "나우루", "투발루"],
                correct: "바티칸",
                category: "상식",
                difficulty: "easy"
            },
            {
                id: 28,
                type: "truefalse",
                question: "커피의 원산지는 에티오피아이다.",
                options: ["O", "X"],
                correct: "O",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 29,
                type: "multiple",
                question: "인체에서 가장 작은 뼈는?",
                options: ["등자뼈", "손가락뼈", "발가락뼈", "코뼈"],
                correct: "등자뼈",
                category: "상식",
                difficulty: "hard"
            },
            {
                id: 30,
                type: "multiple",
                question: "1년은 몇 초인가?",
                options: ["31,536,000초", "31,556,000초", "31,526,000초", "31,546,000초"],
                correct: "31,536,000초",
                category: "상식",
                difficulty: "hard"
            }
        ]
    },
    set4: {
        name: "뇌력 테스트",
        questions: [
            {
                id: 31,
                type: "truefalse",
                question: "펭귄은 남극과 북극 모두에서 서식한다.",
                options: ["O", "X"],
                correct: "X",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 32,
                type: "multiple",
                question: "지구에서 가장 큰 해양은?",
                options: ["태평양", "대서양", "인도양", "북극해"],
                correct: "태평양",
                category: "상식",
                difficulty: "easy"
            },
            {
                id: 33,
                type: "multiple",
                question: "사람의 평균 수명이 가장 긴 나라는?",
                options: ["일본", "스위스", "싱가포르", "홍콩"],
                correct: "일본",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 34,
                type: "truefalse",
                question: "달팽이는 영원히 자랄 수 있다.",
                options: ["O", "X"],
                correct: "O",
                category: "상식",
                difficulty: "hard"
            },
            {
                id: 35,
                type: "multiple",
                question: "세계에서 인구가 가장 많은 도시는?",
                options: ["도쿄", "상하이", "뉴욕", "멕시코시티"],
                correct: "도쿄",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 36,
                type: "multiple",
                question: "인체의 세포 수는 약 몇 개인가?",
                options: ["37조 개", "47조 개", "57조 개", "67조 개"],
                correct: "37조 개",
                category: "상식",
                difficulty: "hard"
            },
            {
                id: 37,
                type: "truefalse",
                question: "모든 포유류는 땀을 흘린다.",
                options: ["O", "X"],
                correct: "X",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 38,
                type: "multiple",
                question: "지구의 대기 중 가장 많은 비율을 차지하는 기체는?",
                options: ["질소", "산소", "이산화탄소", "아르곤"],
                correct: "질소",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 39,
                type: "multiple",
                question: "세계에서 커피를 가장 많이 생산하는 국가는?",
                options: ["브라질", "베트남", "콜롬비아", "인도네시아"],
                correct: "브라질",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 40,
                type: "truefalse",
                question: "파리는 뒤로 날 수 있다.",
                options: ["O", "X"],
                correct: "X",
                category: "상식",
                difficulty: "medium"
            }
        ]
    },
    set5: {
        name: "지식 탐험",
        questions: [
            {
                id: 41,
                type: "multiple",
                question: "비타민 D의 주요 공급원은?",
                options: ["햇빛", "우유", "생선", "과일"],
                correct: "햇빛",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 42,
                type: "truefalse",
                question: "북극곰의 피부는 검은색이다.",
                options: ["O", "X"],
                correct: "O",
                category: "상식",
                difficulty: "hard"
            },
            {
                id: 43,
                type: "multiple",
                question: "세계에서 가장 오래된 대학교는?",
                options: ["알 카라위인 대학", "옥스퍼드 대학", "볼로냐 대학", "케임브리지 대학"],
                correct: "알 카라위인 대학",
                category: "상식",
                difficulty: "hard"
            },
            {
                id: 44,
                type: "multiple",
                question: "지구의 표면 중 육지가 차지하는 비율은?",
                options: ["29%", "31%", "33%", "35%"],
                correct: "29%",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 45,
                type: "truefalse",
                question: "낙타의 혹에는 물이 저장되어 있다.",
                options: ["O", "X"],
                correct: "X",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 46,
                type: "multiple",
                question: "인간의 유전자 수는 약 몇 개인가?",
                options: ["2만 개", "3만 개", "4만 개", "5만 개"],
                correct: "2만 개",
                category: "상식",
                difficulty: "hard"
            },
            {
                id: 47,
                type: "multiple",
                question: "세계에서 가장 긴 철도는?",
                options: ["시베리아 횡단철도", "중국 횡단철도", "인도 횡단철도", "캐나다 횡단철도"],
                correct: "시베리아 횡단철도",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 48,
                type: "truefalse",
                question: "번개는 위에서 아래로 내려온다.",
                options: ["O", "X"],
                correct: "X",
                category: "상식",
                difficulty: "hard"
            },
            {
                id: 49,
                type: "multiple",
                question: "세계에서 가장 많이 재배되는 과일은?",
                options: ["토마토", "바나나", "사과", "오렌지"],
                correct: "토마토",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 50,
                type: "multiple",
                question: "산소를 발견한 과학자는?",
                options: ["조셉 프리스틀리", "앙투안 라부아지에", "로버트 보일", "헨리 캐번디시"],
                correct: "조셉 프리스틀리",
                category: "상식",
                difficulty: "hard"
            }
        ]
    },
    set6: {
        name: "지식 탐험",
        questions: [
            {
                id: 51,
                type: "truefalse",
                question: "꿀은 유통기한이 없다.",
                options: ["O", "X"],
                correct: "O",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 52,
                type: "multiple",
                question: "세계에서 가장 많이 사용되는 성씨는?",
                options: ["리/이", "왕", "장", "김"],
                correct: "리/이",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 53,
                type: "multiple",
                question: "지구의 자전 속도는 적도 기준 시속 몇 km인가?",
                options: ["1,674km/h", "1,574km/h", "1,774km/h", "1,874km/h"],
                correct: "1,674km/h",
                category: "상식",
                difficulty: "hard"
            },
            {
                id: 54,
                type: "truefalse",
                question: "코끼리는 점프를 할 수 없다.",
                options: ["O", "X"],
                correct: "O",
                category: "상식",
                difficulty: "easy"
            },
            {
                id: 55,
                type: "multiple",
                question: "인체에서 가장 단단한 물질은?",
                options: ["치아의 에나멜", "대퇴골", "두개골", "손톱"],
                correct: "치아의 에나멜",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 56,
                type: "multiple",
                question: "세계에서 가장 비싼 향신료는?",
                options: ["사프란", "바닐라", "카다몸", "계피"],
                correct: "사프란",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 57,
                type: "truefalse",
                question: "딸기는 베리류가 아니다.",
                options: ["O", "X"],
                correct: "O",
                category: "상식",
                difficulty: "hard"
            },
            {
                id: 58,
                type: "multiple",
                question: "세계에서 가장 오래된 도시는?",
                options: ["다마스쿠스", "예루살렘", "아테네", "로마"],
                correct: "다마스쿠스",
                category: "상식",
                difficulty: "hard"
            },
            {
                id: 59,
                type: "multiple",
                question: "인간의 평균 심장 박동수는 분당 몇 회인가?",
                options: ["70회", "60회", "80회", "90회"],
                correct: "70회",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 60,
                type: "truefalse",
                question: "모든 포유류는 배꼽이 있다.",
                options: ["O", "X"],
                correct: "O",
                category: "상식",
                difficulty: "medium"
            }
        ]
    },
    set7: {
        name: "상식 마스터",
        questions: [
            {
                id: 61,
                type: "multiple",
                question: "인간의 뼈 중 가장 긴 뼈는?",
                options: ["대퇴골", "경골", "상완골", "척추"],
                correct: "대퇴골",
                category: "상식",
                difficulty: "easy"
            },
            {
                id: 62,
                type: "truefalse",
                question: "악어는 혀를 내밀 수 없다.",
                options: ["O", "X"],
                correct: "O",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 63,
                type: "multiple",
                question: "세계에서 가장 많이 재배되는 곡물은?",
                options: ["옥수수", "쌀", "밀", "보리"],
                correct: "옥수수",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 64,
                type: "multiple",
                question: "태양계에서 자전 속도가 가장 빠른 행성은?",
                options: ["목성", "토성", "해왕성", "천왕성"],
                correct: "목성",
                category: "상식",
                difficulty: "hard"
            },
            {
                id: 65,
                type: "truefalse",
                question: "고래는 아가미로 호흡한다.",
                options: ["O", "X"],
                correct: "X",
                category: "상식",
                difficulty: "easy"
            },
            {
                id: 66,
                type: "multiple",
                question: "세계에서 가장 많이 수출되는 농산물은?",
                options: ["커피", "면화", "대두", "밀"],
                correct: "커피",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 67,
                type: "multiple",
                question: "인간의 적혈구 수명은 약 몇 일인가?",
                options: ["120일", "100일", "140일", "160일"],
                correct: "120일",
                category: "상식",
                difficulty: "hard"
            },
            {
                id: 68,
                type: "truefalse",
                question: "모든 새는 날 수 있다.",
                options: ["O", "X"],
                correct: "X",
                category: "상식",
                difficulty: "easy"
            },
            {
                id: 69,
                type: "multiple",
                question: "세계에서 가장 깊은 호수는?",
                options: ["바이칼 호", "탕가니카 호", "카스피 해", "빅토리아 호"],
                correct: "바이칼 호",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 70,
                type: "multiple",
                question: "피라미드를 만든 돌 한 개의 평균 무게는?",
                options: ["2.5톤", "1.5톤", "3.5톤", "4.5톤"],
                correct: "2.5톤",
                category: "상식",
                difficulty: "hard"
            }
        ]
    },
    set8: {
        name: "상식 마스터",
        questions: [
            {
                id: 71,
                type: "truefalse",
                question: "지구의 자전 방향은 서에서 동이다.",
                options: ["O", "X"],
                correct: "O",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 72,
                type: "multiple",
                question: "세계에서 가장 많이 사용되는 화폐는?",
                options: ["미국 달러", "유로", "영국 파운드", "일본 엔"],
                correct: "미국 달러",
                category: "상식",
                difficulty: "easy"
            },
            {
                id: 73,
                type: "multiple",
                question: "인체의 뇌세포 수는 약 몇 개인가?",
                options: ["1000억 개", "800억 개", "1200억 개", "1400억 개"],
                correct: "1000억 개",
                category: "상식",
                difficulty: "hard"
            },
            {
                id: 74,
                type: "truefalse",
                question: "벌은 빨간색을 구별할 수 있다.",
                options: ["O", "X"],
                correct: "X",
                category: "상식",
                difficulty: "hard"
            },
            {
                id: 75,
                type: "multiple",
                question: "세계에서 가장 많은 섬을 가진 나라는?",
                options: ["스웨덴", "노르웨이", "인도네시아", "필리핀"],
                correct: "스웨덴",
                category: "상식",
                difficulty: "hard"
            },
            {
                id: 76,
                type: "multiple",
                question: "사람의 평균 걸음 속도는?",
                options: ["시속 4km", "시속 5km", "시속 6km", "시속 7km"],
                correct: "시속 4km",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 77,
                type: "truefalse",
                question: "달팽이는 이빨이 있다.",
                options: ["O", "X"],
                correct: "O",
                category: "상식",
                difficulty: "hard"
            },
            {
                id: 78,
                type: "multiple",
                question: "세계에서 가장 많이 팔린 책은?",
                options: ["성경", "코란", "도덕경", "마오쩌둥 어록"],
                correct: "성경",
                category: "상식",
                difficulty: "easy"
            },
            {
                id: 79,
                type: "multiple",
                question: "지구의 중력은 달의 중력의 몇 배인가?",
                options: ["6배", "5배", "7배", "8배"],
                correct: "6배",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 80,
                type: "truefalse",
                question: "모든 박쥐는 초음파를 사용한다.",
                options: ["O", "X"],
                correct: "X",
                category: "상식",
                difficulty: "medium"
            }
        ]
    },
    set9: {
        name: "두뇌 풀파워",
        questions: [
            {
                id: 81,
                type: "multiple",
                question: "사람의 몸에서 가장 큰 근육은?",
                options: ["대둔근", "대퇴사두근", "광배근", "비복근"],
                correct: "대둔근",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 82,
                type: "truefalse",
                question: "뱀은 귀가 없다.",
                options: ["O", "X"],
                correct: "X",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 83,
                type: "multiple",
                question: "세계에서 가장 많이 재배되는 채소는?",
                options: ["감자", "양파", "당근", "배추"],
                correct: "감자",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 84,
                type: "multiple",
                question: "지구에서 가장 빠른 육상 동물은?",
                options: ["치타", "영양", "캥거루", "토끼"],
                correct: "치타",
                category: "상식",
                difficulty: "easy"
            },
            {
                id: 85,
                type: "truefalse",
                question: "빛의 속도는 모든 물질 중 가장 빠르다.",
                options: ["O", "X"],
                correct: "O",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 86,
                type: "multiple",
                question: "세계에서 가장 오래 산 동물은?",
                options: ["조개", "거북이", "상어", "코끼리"],
                correct: "조개",
                category: "상식",
                difficulty: "hard"
            },
            {
                id: 87,
                type: "multiple",
                question: "인간의 DNA는 침팬지와 몇 % 동일한가?",
                options: ["98%", "96%", "94%", "92%"],
                correct: "98%",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 88,
                type: "truefalse",
                question: "남극에도 사막이 있다.",
                options: ["O", "X"],
                correct: "O",
                category: "상식",
                difficulty: "hard"
            },
            {
                id: 89,
                type: "multiple",
                question: "세계에서 가장 큰 산호초는?",
                options: ["그레이트배리어리프", "뉴칼레도니아 산호초", "벨리즈 산호초", "몰디브 산호초"],
                correct: "그레이트배리어리프",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 90,
                type: "multiple",
                question: "비행기 블랙박스의 실제 색깔은?",
                options: ["주황색", "검은색", "빨간색", "노란색"],
                correct: "주황색",
                category: "상식",
                difficulty: "medium"
            }
        ]
    },
    set10: {
        name: "두뇌 풀파워",
        questions: [
            {
                id: 91,
                type: "truefalse",
                question: "물고기도 목이 마르다.",
                options: ["O", "X"],
                correct: "O",
                category: "상식",
                difficulty: "hard"
            },
            {
                id: 92,
                type: "multiple",
                question: "세계에서 가장 많이 재배되는 꽃은?",
                options: ["장미", "튤립", "국화", "카네이션"],
                correct: "장미",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 93,
                type: "multiple",
                question: "인간의 위에서 음식이 소화되는 시간은 평균 몇 시간인가?",
                options: ["4시간", "3시간", "5시간", "6시간"],
                correct: "4시간",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 94,
                type: "truefalse",
                                question: "모든 대나무는 60년마다 꽃을 핀다.",
                options: ["O", "X"],
                correct: "X",
                category: "상식",
                difficulty: "hard"
            },
            {
                id: 95,
                type: "multiple",
                question: "세계에서 가장 많은 비가 내리는 곳은?",
                options: ["체라푼지", "하와이", "시애틀", "런던"],
                correct: "체라푼지",
                category: "상식",
                difficulty: "hard"
            },
            {
                id: 96,
                type: "multiple",
                question: "인간의 평균 수면 시간은?",
                options: ["8시간", "7시간", "9시간", "6시간"],
                correct: "8시간",
                category: "상식",
                difficulty: "easy"
            },
            {
                id: 97,
                type: "truefalse",
                question: "지구의 자전 속도는 점점 느려지고 있다.",
                options: ["O", "X"],
                correct: "O",
                category: "상식",
                difficulty: "hard"
            },
            {
                id: 98,
                type: "multiple",
                question: "세계에서 가장 오래된 생명체는?",
                options: ["브리슬콘 소나무", "세쿼이아", "올리브 나무", "바오밥 나무"],
                correct: "브리슬콘 소나무",
                category: "상식",
                difficulty: "hard"
            },
            {
                id: 99,
                type: "multiple",
                question: "인간의 뼈가 부러졌을 때 완전히 치유되는 시간은 평균 몇 주인가?",
                options: ["6-8주", "4-6주", "8-10주", "10-12주"],
                correct: "6-8주",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 100,
                type: "truefalse",
                question: "공룡은 모두 알을 낳았다.",
                options: ["O", "X"],
                correct: "O",
                category: "상식",
                difficulty: "medium"
            }
        ]
    },
    set11: {
        name: "지식 끝판왕",
        questions: [
            {
                id: 101,
                type: "multiple",
                question: "세계에서 가장 단단한 자연물질은?",
                options: ["다이아몬드", "흑연", "루비", "사파이어"],
                correct: "다이아몬드",
                category: "상식",
                difficulty: "easy"
            },
            {
                id: 102,
                type: "truefalse",
                question: "오징어의 피는 파란색이다.",
                options: ["O", "X"],
                correct: "O",
                category: "상식",
                difficulty: "hard"
            },
            {
                id: 103,
                type: "multiple",
                question: "인간의 뇌는 하루에 몇 개의 생각을 하는가?",
                options: ["7만 개", "5만 개", "6만 개", "8만 개"],
                correct: "7만 개",
                category: "상식",
                difficulty: "hard"
            },
            {
                id: 104,
                type: "multiple",
                question: "세계에서 가장 많이 사용되는 이모티콘은?",
                options: ["웃는 얼굴", "하트", "슬픈 얼굴", "윙크"],
                correct: "웃는 얼굴",
                category: "상식",
                difficulty: "easy"
            },
            {
                id: 105,
                type: "truefalse",
                question: "나비는 발로 맛을 본다.",
                options: ["O", "X"],
                correct: "O",
                category: "상식",
                difficulty: "hard"
            },
            {
                id: 106,
                type: "multiple",
                question: "지구의 대기 중 산소의 비율은?",
                options: ["21%", "18%", "23%", "25%"],
                correct: "21%",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 107,
                type: "multiple",
                question: "세계에서 가장 많이 번역된 책은?",
                options: ["어린 왕자", "성경", "해리포터", "돈키호테"],
                correct: "어린 왕자",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 108,
                type: "truefalse",
                question: "지구상의 모든 물은 35억년 이상 되었다.",
                options: ["O", "X"],
                correct: "O",
                category: "상식",
                difficulty: "hard"
            },
            {
                id: 109,
                type: "multiple",
                question: "인체의 세포는 매일 몇 개가 죽는가?",
                options: ["3000억 개", "2000억 개", "4000억 개", "5000억 개"],
                correct: "3000억 개",
                category: "상식",
                difficulty: "hard"
            },
            {
                id: 110,
                type: "multiple",
                question: "세계에서 가장 비싼 향수의 주요 성분은?",
                options: ["고래 장액", "장미 오일", "재스민", "사향"],
                correct: "고래 장액",
                category: "상식",
                difficulty: "hard"
            }
        ]
    },
    set12: {
        name: "지식 끝판왕",
        questions: [
            {
                id: 111,
                type: "truefalse",
                question: "개미는 절대 잠들지 않는다.",
                options: ["O", "X"],
                correct: "X",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 112,
                type: "multiple",
                question: "인간의 머리카락은 하루에 평균 몇 개가 빠지는가?",
                options: ["100개", "50개", "150개", "200개"],
                correct: "100개",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 113,
                type: "multiple",
                question: "세계에서 가장 오래된 악기는?",
                options: ["플루트", "드럼", "하프", "리라"],
                correct: "플루트",
                category: "상식",
                difficulty: "hard"
            },
            {
                id: 114,
                type: "truefalse",
                question: "사람의 손가락 지문은 평생 변하지 않는다.",
                options: ["O", "X"],
                correct: "O",
                category: "상식",
                difficulty: "easy"
            },
            {
                id: 115,
                type: "multiple",
                question: "지구의 중심부 온도는 약 몇 도인가?",
                options: ["6000도", "5000도", "7000도", "8000도"],
                correct: "6000도",
                category: "상식",
                difficulty: "hard"
            },
            {
                id: 116,
                type: "multiple",
                question: "세계에서 가장 많이 재배되는 향신료는?",
                options: ["후추", "계피", "생강", "마늘"],
                correct: "후추",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 117,
                type: "truefalse",
                question: "모든 포유류는 하품을 한다.",
                options: ["O", "X"],
                correct: "O",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 118,
                type: "multiple",
                question: "인간의 눈은 몇 가지 색상을 구별할 수 있는가?",
                options: ["1000만 가지", "800만 가지", "1200만 가지", "1400만 가지"],
                correct: "1000만 가지",
                category: "상식",
                difficulty: "hard"
            },
            {
                id: 119,
                type: "multiple",
                question: "세계에서 가장 많은 산이 있는 나라는?",
                options: ["중국", "네팔", "인도", "러시아"],
                correct: "중국",
                category: "상식",
                difficulty: "medium"
            },
            {
                id: 120,
                type: "truefalse",
                question: "달의 표면 온도는 낮과 밤의 차이가 300도 이상이다.",
                options: ["O", "X"],
                correct: "O",
                category: "상식",
                difficulty: "hard"
            }
        ]
    }
};

export default quizDataSets;
