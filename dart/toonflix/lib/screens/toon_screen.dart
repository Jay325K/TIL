import 'package:flutter/material.dart';

class ToonScreen extends StatelessWidget {
  const ToonScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        elevation: 1,
        backgroundColor: Colors.white,
        foregroundColor: Colors.green,
        title: const Text(
          "오늘의 웹툰",
          style: TextStyle(
            fontSize: 24,
          ),
        ),
      ),
    );
    // Scaffold는 screen을 위한 기본적인 레이아웃과 설정을 제공해준다
  }
}
