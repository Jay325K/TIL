import 'package:flutter/material.dart';
import 'package:toonflix/models/webtoon_model.dart';
import 'package:toonflix/services/api_service.dart';

class ToonScreen extends StatelessWidget {
  Future<List<WebtoonModel>> webtoons = ApiService.getTodayToons();
  ToonScreen({super.key});

  @override
  Widget build(BuildContext context) {
    print(webtoons);
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
      body: FutureBuilder(
        future: webtoons,
        builder: (context, snapshot) {
          if (snapshot.hasData) {
            return const Text("There is data!");
          }
          return const Text('Loading...');
        },
      ),
    );
    // Scaffold는 screen을 위한 기본적인 레이아웃과 설정을 제공해준다
  }
}
