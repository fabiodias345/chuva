class SyncItem {
  final String id;
  final String acao;
  final Map<String, dynamic> payload;
  final DateTime createdAt;

  const SyncItem({
    required this.id,
    required this.acao,
    required this.payload,
    required this.createdAt,
  });
}

