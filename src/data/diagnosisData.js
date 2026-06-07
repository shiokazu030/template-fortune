export const diagnosisData = {
  meta: {
    title: "恋愛パターン診断",
    subtitle: "あなたが恋で大切にしているものがわかる",
    eyebrow: "Love Pattern Quiz",
    startButton: "診断をはじめる",
    resultLabel: "あなたは",
    resultSuffix: "タイプ",
    restartButton: "もう一度診断する",
    shareButton: "Xで共有する",
    shareTextTemplate:
      "【恋愛パターン診断】\n私の結果は{type}タイプでした。\n\nあなたの恋愛パターンは？",
    disclaimer:
      "この診断は恋愛傾向を楽しく知るためのコンテンツです。未来や相手の気持ちを断定するものではありません。",
    cta: {
      label: "個別リーディングを予約する",
      url: "https://example.com",
      note: "あなたの状況に合わせた恋愛の整理に使えます。",
    },
  },
  theme: {
    accent: "#7752a6",
    accentDark: "#4d3475",
    subAccent: "#d9a65f",
  },
  types: [
    { id: "moon", name: "月読み", shortName: "月", image: "" },
    { id: "spark", name: "直感", shortName: "直感", image: "" },
    { id: "garden", name: "育てる", shortName: "育てる", image: "" },
    { id: "mirror", name: "見極め", shortName: "見極め", image: "" },
  ],
  categories: {
    feeling: "感情、余韻、心の動き",
    intuition: "直感、勢い、ときめき",
    trust: "信頼、安心、関係づくり",
    insight: "観察、距離感、見極め",
  },
  questions: [
    {
      id: "q1",
      text: "好きになり始める時、最初に動くのは？",
      options: [
        { id: "A", text: "相手といる時の心の揺れ", scores: { moon: 2 }, category: "feeling" },
        { id: "B", text: "直感的なときめき", scores: { spark: 2 }, category: "intuition" },
        { id: "C", text: "一緒にいて安心できる感覚", scores: { garden: 2 }, category: "trust" },
        { id: "D", text: "相手の言動を見て納得できるか", scores: { mirror: 2 }, category: "insight" },
      ],
    },
    {
      id: "q2",
      text: "恋愛で一番大切にしたいのは？",
      options: [
        { id: "A", text: "気持ちがちゃんと通うこと", scores: { moon: 2 }, category: "feeling" },
        { id: "B", text: "一緒にいる時の高揚感", scores: { spark: 2 }, category: "intuition" },
        { id: "C", text: "信頼を少しずつ積み重ねること", scores: { garden: 2 }, category: "trust" },
        { id: "D", text: "無理をしない距離感", scores: { mirror: 2 }, category: "insight" },
      ],
    },
    {
      id: "q3",
      text: "不安になった時にしがちなことは？",
      options: [
        { id: "A", text: "相手の言葉を何度も思い返す", scores: { moon: 2 }, category: "feeling" },
        { id: "B", text: "勢いで連絡したくなる", scores: { spark: 2 }, category: "intuition" },
        { id: "C", text: "落ち着いて関係を整えようとする", scores: { garden: 2 }, category: "trust" },
        { id: "D", text: "相手の態度を冷静に見る", scores: { mirror: 2 }, category: "insight" },
      ],
    },
    {
      id: "q4",
      text: "理想の関係に近いのは？",
      options: [
        { id: "A", text: "言葉にしなくても気持ちが伝わる", scores: { moon: 2 }, category: "feeling" },
        { id: "B", text: "毎日が少し楽しくなる", scores: { spark: 2 }, category: "intuition" },
        { id: "C", text: "お互いを支え合える", scores: { garden: 2 }, category: "trust" },
        { id: "D", text: "自分らしさを失わない", scores: { mirror: 2 }, category: "insight" },
      ],
    },
    {
      id: "q5",
      text: "相手を好きだと感じる瞬間は？",
      options: [
        { id: "A", text: "ふとした優しさが心に残る時", scores: { moon: 2 }, category: "feeling" },
        { id: "B", text: "一緒にいるとテンションが上がる時", scores: { spark: 2 }, category: "intuition" },
        { id: "C", text: "約束や言葉を大切にしてくれる時", scores: { garden: 2 }, category: "trust" },
        { id: "D", text: "価値観が合うと感じた時", scores: { mirror: 2 }, category: "insight" },
      ],
    },
    {
      id: "q6",
      text: "恋でつまずきやすいのは？",
      options: [
        { id: "A", text: "考えすぎて苦しくなる", scores: { moon: 2 }, category: "feeling" },
        { id: "B", text: "勢いで進みすぎる", scores: { spark: 2 }, category: "intuition" },
        { id: "C", text: "相手を優先しすぎる", scores: { garden: 2 }, category: "trust" },
        { id: "D", text: "慎重になりすぎる", scores: { mirror: 2 }, category: "insight" },
      ],
    },
    {
      id: "q7",
      text: "恋愛相談で知りたいことは？",
      options: [
        { id: "A", text: "自分の気持ちの整理", scores: { moon: 2 }, category: "feeling" },
        { id: "B", text: "今動いていいタイミングか", scores: { spark: 2 }, category: "intuition" },
        { id: "C", text: "関係を育てる方法", scores: { garden: 2 }, category: "trust" },
        { id: "D", text: "相手との距離感の見方", scores: { mirror: 2 }, category: "insight" },
      ],
    },
    {
      id: "q8",
      text: "最後に、恋で大切にしたい本音は？",
      options: [
        { id: "A", text: "心から安心して好きでいたい", scores: { moon: 2 }, category: "feeling" },
        { id: "B", text: "ときめきを大事にしたい", scores: { spark: 2 }, category: "intuition" },
        { id: "C", text: "長く続く関係を作りたい", scores: { garden: 2 }, category: "trust" },
        { id: "D", text: "自分を大切にしながら恋したい", scores: { mirror: 2 }, category: "insight" },
      ],
    },
  ],
  results: {
    moon: {
      title: "気持ちの余韻を大切にするタイプ",
      summary:
        "あなたは、相手の言葉や空気感を深く受け取るタイプです。小さな優しさや違和感が心に残りやすく、恋をとても丁寧に感じます。",
      action:
        "不安な時は、相手の反応だけで判断せず、自分が本当はどうしたいのかを言葉にして整理してみましょう。",
      ctaTitle: "おすすめの相談テーマ",
      ctaText: "気持ちの整理や、今の関係をどう受け止めるかを一緒に見ていく相談がおすすめです。",
      matches: ["育てる", "見極め"],
    },
    spark: {
      title: "ときめきと直感で恋が動くタイプ",
      summary:
        "あなたは、好きという感覚がはっきり出やすいタイプです。勢いが魅力になる一方で、気持ちが高まるほど焦りやすいこともあります。",
      action:
        "動きたい時ほど、一度だけ深呼吸して、相手との温度差やタイミングを見てから進めると恋が安定します。",
      ctaTitle: "おすすめの相談テーマ",
      ctaText: "連絡するタイミングや、今動くべきかを整理する相談がおすすめです。",
      matches: ["月読み", "育てる"],
    },
    garden: {
      title: "信頼を少しずつ育てるタイプ",
      summary:
        "あなたは、安心できる関係をゆっくり作りたいタイプです。相手を大切にできる分、自分の気持ちを後回しにしすぎることがあります。",
      action:
        "相手を支えるだけでなく、自分が望む関係やペースも大切にして、無理のない形を選びましょう。",
      ctaTitle: "おすすめの相談テーマ",
      ctaText: "関係を長く育てる方法や、自分を大切にする距離感の相談がおすすめです。",
      matches: ["月読み", "見極め"],
    },
    mirror: {
      title: "自分らしさを守りながら見極めるタイプ",
      summary:
        "あなたは、恋に流されすぎず、相手との相性や距離感を見たいタイプです。慎重さは強みですが、考えすぎてチャンスを逃すこともあります。",
      action:
        "判断材料を集めるだけでなく、自分の気持ちが前向きに動く瞬間も大切にしてみましょう。",
      ctaTitle: "おすすめの相談テーマ",
      ctaText: "相手との相性や、今の距離感をどう見るかを整理する相談がおすすめです。",
      matches: ["育てる", "月読み"],
    },
  },
  tieBreaker: {
    typeCategories: {
      moon: ["feeling"],
      spark: ["intuition"],
      garden: ["trust"],
      mirror: ["insight"],
    },
    fallbackPriority: ["garden", "moon", "mirror", "spark"],
  },
};

export default diagnosisData;
