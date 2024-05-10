def grade(score):
   if score > 100:
       return "잘못된 점수입니다."
   elif score < 0:
       return "잘못된 점수입니다."
  
   grades = {10: 'A', 9: 'A', 8: 'B', 7: 'C', 6: 'D'}
   return grades.get(score // 10, 'F')


while True:
   try:
       score = int(input("점수를 입력하세요: "))
       grade = grade(score)
       print(grade)
       break
   except ValueError:
       print("정수를 입력하세요.")