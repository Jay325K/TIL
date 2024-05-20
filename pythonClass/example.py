
def calculate_grade(score):
    if score >= 90:
        return 'A'
    elif score >= 80:
        return 'B'
    elif score >= 70:
        return 'C'
    elif score >= 60:
        return 'D'
    else:
        return 'F'

# 사용자로부터 점수 입력 받기
while True:
    try:
        score = float(input("점수를 입력하세요: "))
        if 0 <= score <= 100:
            break
        else:
            print("입력값이 올바르지 않습니다. 다시 입력해주세요.")
    except ValueError:
        print("숫자를 입력하세요.")

# 성적 산출
grade = calculate_grade(score)

# 결과 출력
print(f"입력한 점수 {score}의 성적은 {grade}입니다.")
