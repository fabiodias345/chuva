import 'package:flutter/material.dart';

import 'pages/chamados_page.dart';

void main() {
  runApp(const ChuvaApp());
}

class ChuvaApp extends StatelessWidget {
  const ChuvaApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Chuva',
      theme: ThemeData(useMaterial3: true),
      home: const ChamadosPage(),
    );
  }
}

