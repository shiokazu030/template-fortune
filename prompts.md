export const diagnosisData = {
  meta: {
    title: "運勢の整え方診断",
    subtitle: "今のあなたに合う、流れの整え方がわかる",
    eyebrow: "Fortune Guide Quiz",
    startButton: "診断をはじめる",
    resultLabel: "あなたは",
    resultSuffix: "タイプ",
    restartButton: "もう一度診断する",
    shareButton: "Xで共有する",
    shareTextTemplate:
      "【運勢の整え方診断】\n私の結果は{type}タイプでした。\n\n今のあなたに合う流れの整え方は？",
    disclaimer:
      "この診断は占い・自己理解を楽しむためのコンテンツです。未来や結果を断定するものではありません。",
    cta: {
      label: "個別鑑定で詳しく見る",
      url: "https://example.com",
      note: "診断結果をもとに、今の状況に合わせた流れの整え方を相談できます。",
    },
  },
  theme: {
    accent: "#7752a6",
    accentDark: "#4d3475",
    subAccent: "#d9a65f",
  },
  types: [
    { id: "moon", name: "月読み", shortName: "月", image: "" },
    { id: "star", name: "星ひらき", shortName: "星", image: "" },
    { id: "earth", name: "土台整え", shortName: "土台", image: "" },
    { id: "wind", name: "流れ乗り", shortName: "風", image: "" },
  ],
  categories: {
    feeling: "感情、内面、休息",
    vision: "願い、目標、可能性",
    base: "生活、環境、土台",
    timing: "行動、タイミング、流れ",
  },
  questions: [
    {
      id: "q1",
      text: "最近いちばん気になっていることは？",
      options: [
        { id: "A", text: "気持ちが揺れやすい", scores: { moon: 2 }, category: "feeling" },
        { id: "B", text: "次に何を目指すか", scores: { star: 2 }, category: "vision" },
        { id: "C", text: "生活や環境を整えたい", scores: { earth: 2 }, category: "base" },
        { id: "D", text: "動くタイミングを知りたい", scores: { wind: 2 }, category: "timing" },
      ],
    },
    {
      id: "q2",
      text: "運気を上げたい時、まずやりたいのは？",
      options: [
        { id: "A", text: "心を落ち着かせる", scores: { moon: 2 }, category: "feeling" },
        { id: "B", text: "理想を書き出す", scores: { star: 2 }, category: "vision" },
        { id: "C", text: "部屋や持ち物を整える", scores: { earth: 2 }, category: "base" },
        { id: "D", text: "小さく行動してみる", scores: { wind: 2 }, category: "timing" },
      ],
    },
    {
      id: "q3",
      text: "今の自分に足りないと感じるものは？",
      options: [
        { id: "A", text: "安心できる時間", scores: { moon: 2 }, category: "feeling" },
        { id: "B", text: "前向きな目標", scores: { star: 2 }, category: "vision" },
        { id: "C", text: "安定した習慣", scores: { earth: 2 }, category: "base" },
        { id: "D", text: "流れに乗る勢い", scores: { wind: 2 }, category: "timing" },
      ],
    },
    {
      id: "q4",
      text: "迷った時に知りたいのは？",
      options: [
        { id: "A", text: "本当の気持ち", scores: { moon: 2 }, category: "feeling" },
        { id: "B", text: "進む方向性", scores: { star: 2 }, category: "vision" },
        { id: "C", text: "今やめた方がいいこと", scores: { earth: 2 }, category: "base" },
        { id: "D", text: "動くタイミング", scores: { wind: 2 }, category: "timing" },
      ],
    },
    {
      id: "q5",
      text: "いい流れに入ったと感じるのは？",
      options: [
        { id: "A", text: "気持ちが軽くなる時", scores: { moon: 2 }, category: "feeling" },
        { id: "B", text: "やりたいことが見える時", scores: { star: 2 }, category: "vision" },
        { id: "C", text: "暮らしが整う時", scores: { earth: 2 }, category: "base" },
        { id: "D", text: "偶然が重なる時", scores: { wind: 2 }, category: "timing" },
      ],
    },
    {
      id: "q6",
      text: "今つまずきやすいのは？",
      options: [
        { id: "A", text: "考えすぎて疲れる", scores: { moon: 2 }, category: "feeling" },
        { id: "B", text: "理想がぼんやりしている", scores: { star: 2 }, category: "vision" },
        { id: "C", text: "身の回りが散らかりやすい", scores: { earth: 2 }, category: "base" },
        { id: "D", text: "チャンスを逃しがち", scores: { wind: 2 }, category: "timing" },
      ],
    },
    {
      id: "q7",
      text: "鑑定で見てもらいたいことは？",
      options: [
        { id: "A", text: "心の整理", scores: { moon: 2 }, category: "feeling" },
        { id: "B", text: "これからの可能性", scores: { star: 2 }, category: "vision" },
        { id: "C", text: "今整えるべき土台", scores: { earth: 2 }, category: "base" },
        { id: "D", text: "動く時期や流れ", scores: { wind: 2 }, category: "timing" },
      ],
    },
    {
      id: "q8",
      text: "最後に、今いちばん欲しい感覚は？",
      options: [
        { id: "A", text: "ほっとする安心感", scores: { moon: 2 }, category: "feeling" },
        { id: "B", text: "未来への希望", scores: { star: 2 }, category: "vision" },
        { id: "C", text: "地に足がつく感覚", scores: { earth: 2 }, category: "base" },
        { id: "D", text: "流れに乗る軽さ", scores: { wind: 2 }, category: "timing" },
      ],
    },
  ],
  results: {
    moon: {
      title: "心を休ませることで流れが戻るタイプ",
      summary:
        "あなたは、外側を急いで変えるよりも、まず心の揺れを整えることで運気の流れが戻りやすいタイプです。感情を無視せず、安心できる時間を作ることが大切です。",
      action:
        "まずは予定を詰め込みすぎず、心が落ち着く時間を確保しましょう。迷いが強い時は、気持ちの整理から始めるのがおすすめです。",
      ctaTitle: "おすすめの鑑定テーマ",
      ctaText: "今の心の状態と、無理なく整えるための流れを見ていく鑑定がおすすめです。",
      matches: ["土台整え", "星ひらき"],
    },
    star: {
      title: "願いを言葉にすると運が動くタイプ",
      summary:
        "あなたは、理想や目標が見えると前に進みやすいタイプです。ぼんやりした不安を抱えるより、これから望む未来を言葉にすると流れが変わります。",
      action:
        "まずは叶えたいことを3つ書き出してみましょう。大きな願いより、今の自分が進める一歩に落とすのがポイントです。",
      ctaTitle: "おすすめの鑑定テーマ",
      ctaText: "これからの可能性や、願いを現実に近づけるための方向性を見る鑑定がおすすめです。",
      matches: ["流れ乗り", "月読み"],
    },
    earth: {
      title: "土台を整えるほど運が安定するタイプ",
      summary:
        "あなたは、環境や生活リズムが整うほど本来の力を出しやすいタイプです。大きな開運アクションより、日々の小さな整えが運の土台になります。",
      action:
        "まずは部屋、持ち物、睡眠、予定のどれか1つを整えてみましょう。身近な場所から変えると流れが安定します。",
      ctaTitle: "おすすめの鑑定テーマ",
      ctaText: "今の運気を支える土台と、整えるべき生活・環境を見ていく鑑定がおすすめです。",
      matches: ["月読み", "流れ乗り"],
    },
    wind: {
      title: "タイミングを掴むと一気に進むタイプ",
      summary:
        "あなたは、流れやチャンスを感じ取ることで動き出せるタイプです。考え込みすぎるより、小さく試すことで運のリズムを掴みやすくなります。",
      action:
        "まずは気になっていることを1つだけ試してみましょう。完璧な準備より、軽い一歩が流れを作ります。",
      ctaTitle: "おすすめの鑑定テーマ",
      ctaText: "動くタイミングや、今乗りやすい流れを見ていく鑑定がおすすめです。",
      matches: ["星ひらき", "土台整え"],
    },
  },
  tieBreaker: {
    typeCategories: {
      moon: ["feeling"],
      star: ["vision"],
      earth: ["base"],
      wind: ["timing"],
    },
    fallbackPriority: ["earth", "moon", "star", "wind"],
  },
};

export default diagnosisData;
