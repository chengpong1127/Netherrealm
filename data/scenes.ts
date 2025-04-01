import IScene from "@/types/scene";
import { SpeakerType } from "@/types/speaker";

export const scenes: IScene[] = [
  // background: "bg-green-500",
  // soundEffect: "輕快音樂",
  // foreground: "/images/character.png",
  // description: "我只是一個敘述\n這是第二行",
  // buttons: [
  //   { content: "我準備好了。", jumpPage: 1 },
  //   { content: "這一定是夢……", jumpPage: 1 },
  // ],
  // conversation: {
  //   speaker: SpeakerType.XI,
  //   content: "辛苦了一個禮拜，好不容易休息了…",
  // },
  // exploreButton: {
  //   content: "我是",
  //   position: {
  //     x: 500,
  //     y: 500,
  {
    background: "bg-white",
    soundEffect: "輕快音樂",
  },
  {
    background: "/images/city-color.jpg",
    soundEffect: "輕快音樂",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "辛苦了一個禮拜，好不容易休息了…",
    },
  },
  {
    background: "/images/city-color.jpg",
    soundEffect: "輕快音樂",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "今天天氣不錯耶~去平常常去的那間商場好了！順便去公園曬個太陽~",
    },
  },
  {
    background: "/images/city-color.jpg",
    soundEffect: "驚呼聲",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "！！",
    },
  },
  {
    background: "/images/city-color.jpg",
    soundEffect: "驚呼聲",
    description: "我意識到到自己躺在地上動彈不得，劇痛忽然襲擊全身，帶來一陣一陣暈眩",
  },
  {
    background: "/images/city-color.jpg",
    soundEffect: "驚呼聲",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "發生什麼事了？怎麼這麼痛？誰來救救我？…我可能快撐不下去了…",
    },
  },
  {
    background: "/images/city-color.jpg",
    soundEffect: "驚呼聲",
    description: "想到這裡，視線越來越模糊…",
  },
  {
    background: "bg-white",
    soundEffect: "神秘的鋼琴",
  },
  {
    background: "bg-white",
    soundEffect: "神秘的鋼琴",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "這裡是……哪裡？",
    },
  },
  {
    background: "bg-white",
    soundEffect: "神秘的鋼琴",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "怎麼回事……？我記得剛剛還在……",
    },
  },
  {
    background: "bg-white",
    soundEffect: "神秘的鋼琴",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "……在哪？",
    },
  },
  {
    background: "bg-white",
    soundEffect: "神秘的鋼琴",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "……",
    },
  },
  {
    background: "bg-white",
    soundEffect: "神秘的鋼琴",
    description: "記憶空白帶來的混亂悄悄的在啃蝕著我",
  },
  {
    background: "bg-white",
    soundEffect: "神秘的鋼琴",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "前方有光——或許，只要靠近那裡，就能找到答案",
    },
  },
  {
    background: "bg-white",
    soundEffect: "神秘的鋼琴",
    description: "遠方閃爍的光點開始接近，逐漸顯現出模糊的輪廓",
  },
  {
    background: "bg-white",
    foreground: "/images/character.png",
    soundEffect: "神秘的鋼琴",
    description: "一個身影從光霧中走來，帶著一種平靜的空靈感",
  },
  {
      background: "bg-white",
      foreground: "/images/character.png",
      soundEffect: "神秘的鋼琴",
      conversation: {
        speaker: SpeakerType.XI,
        content: "你醒了。",
      },
  },
  {
      background: "bg-white",
      foreground: "/images/character.png",
      soundEffect: "神秘的鋼琴",
      conversation: {
        speaker: SpeakerType.PLAYER,
        content: "……醒了？你是誰？",
      },
  },
  {
    background: "bg-white",
    soundEffect: "神秘的鋼琴",
    description: "她沒有立刻回答，而是輕輕伸出手，手心攤開",
},
{
  background: "bg-white",
  soundEffect: "神秘的鋼琴",
  description: "她的手掌心，浮現出一小撮閃爍的沙粒，緩緩飄散，隨風消逝",
},
{
  background: "bg-white",
  foreground: "/images/character.png",
  soundEffect: "神秘的鋼琴",
  conversation: {
    speaker: SpeakerType.XI,
    content: "我是誰不重要，你還記得你是誰嗎？\n記憶，就像這些沙子一樣。它從你指縫間流走了。",
  },
},
{
  background: "bg-white",
  foreground: "/images/character.png",
  soundEffect: "神秘的鋼琴",
  conversation: {
    speaker: SpeakerType.PLAYER,
    content: "這……為什麼……我記得的事，好像變得模糊了……",
  },
  description: "我試圖接住光點，但它們從指縫間滑落",
},
{
  background: "bg-white",
  foreground: "/images/character.png",
  soundEffect: "神秘的鋼琴",
  conversation: {
    speaker: SpeakerType.XI,
    content: "不用擔心，這些片段不會就此消失。它們只是等待你重新發現。",
  },
},
{
  background: "bg-white",
  foreground: "/images/character.png",
  soundEffect: "神秘的鋼琴",
  conversation: {
    speaker: SpeakerType.PLAYER,
    content: "重新發現？",
  },
},
{
  background: "bg-white",
  foreground: "/images/character.png",
  soundEffect: "神秘的鋼琴",
  conversation: {
    speaker: SpeakerType.XI,
    content: "一起來吧，慢慢來，我們會一起找到屬於你的碎片的。",
  },
},
{
  background: "bg-white",
  soundEffect: "神秘的鋼琴",
},
{
  background: "/images/展覽館/gallery-pink-orig.png",
  foreground: "/images/character.png",
  soundEffect: "柔和緩慢的鋼琴",
  description: "現在是什麼情況？先弄清楚一下好了",
  exploreButton: {
      content: "詢問曦流",
      position: {
        x: 1200,
        y: 500,
      },
  },
},
{
  background: "/images/展覽館/gallery-pink-orig.png",
  foreground: "/images/character.png",
  soundEffect: "柔和緩慢的鋼琴",
  conversation: {
    speaker: SpeakerType.XI,
    content: "你的處境取決於你怎麼定義。",
  },
},
{
  background: "/images/展覽館/gallery-pink-orig.png",
  foreground: "/images/character.png",
  soundEffect: "柔和緩慢的鋼琴",
  description: "感覺是問不出實際內容了。還是先自己觀察看看？",
  exploreButton: {
    content: "環顧四周",
    position: {
      x: 500,
      y: 500,
    },
  },
},
{
  background: "/images/展覽館/gallery-pink-orig.png",
  foreground: "/images/character.png",
  soundEffect: "柔和緩慢的鋼琴",
  description: "這座館內沒有其他人，由四面牆圍出四方型的對稱空間，空間不大、但不至於有壓迫感",
  exploreButton: {
    content: "觀察展品",
    position: {
      x: 500,
      y: 500,
    },
  },
},
{
  background: "/images/展覽館/gallery-pink-orig.png",
  foreground: "/images/character.png",
  soundEffect: "柔和緩慢的鋼琴",
  description: "這空間正中央從天花板垂吊著一些畫框，但大致上都框著空白的畫布",exploreButton: {
    content: "觀察拱型簾幕",
    position: {
      x: 500,
      y: 500,
    },
  },
},
{
  background: "/images/展覽館/gallery-pink-orig.png",
  foreground: "/images/character.png",
  soundEffect: "柔和緩慢的鋼琴",
  description: "周圍四面牆上各有一道拱型簾幕，帶有些許厚重感，類似舞台的布幕。\n這些布幕分別是櫻粉、湖綠、赭紅、與石灰色的",
},
{
  background: "/images/展覽館/gallery-pink-orig.png",
  foreground: "/images/character.png",
  soundEffect: "柔和緩慢的鋼琴",
  description: "四道簾幕的中央，各別著一塊金屬銘牌，之中三塊都刻著一種繁複而神秘的符文，唯獨櫻粉色簾幕上的銘牌文字，是能理解的——",
},
{
  background: "/images/展覽館/gallery-pink-orig.png",
  foreground: "/images/character.png",
  soundEffect: "柔和緩慢的鋼琴",
  description: "「光雨落下的地方，時間曾在這裡停歇。\n黃昏的屋簷下，你曾駐足，目送風掀起簾幕，\n照亮流轉不定的色彩。」",
},
{
  background: "/images/展覽館/簾幕開.jpg",
  foreground: "/images/character.png",
  soundEffect: "柔和緩慢的鋼琴",
  description: "讀完後，簾幕無聲地向兩側揭開，露出門後的空間——",
},
{
  background: "/images/展覽館/簾幕開.jpg",
  foreground: "/images/character.png",
  soundEffect: "柔和緩慢的鋼琴",
  description: "看起來像一個小展間，展櫃和畫框都是空的，似乎等待著什麼被寫入；\n展櫃後方有一扇門",
},
{
  background: "/images/展覽館/展品區.jpg",
  foreground: "/images/character.png",
  soundEffect: "柔和緩慢的鋼琴",
  conversation: {
    speaker: SpeakerType.XI,
    content: "你似乎有疑問？",
  },
},
{
  background: "/images/展覽館/展品區.jpg",
  foreground: "/images/character.png",
  soundEffect: "柔和緩慢的鋼琴",
  conversation: {
    speaker: SpeakerType.PLAYER,
    content: "……這裡是什麼地方？",
  },
},
{
  background: "/images/展覽館/展品區.jpg",
  foreground: "/images/character.png",
  soundEffect: "柔和緩慢的鋼琴",
  conversation: {
    speaker: SpeakerType.XI,
    content: "這裡是你選擇進入的地方。",
  },
},
{
  background: "/images/展覽館/展品區.jpg",
  foreground: "/images/character.png",
  soundEffect: "柔和緩慢的鋼琴",
  conversation: {
    speaker: SpeakerType.PLAYER,
    content: "……",
  },
  description: "語氣些許淡然，回應超級含糊……",
},
{
  background: "/images/展覽館/展品區.jpg",
  foreground: "/images/character.png",
  soundEffect: "柔和緩慢的鋼琴",
  conversation: {
    speaker: SpeakerType.PLAYER,
    content: "可是，為什麼只有這裡的銘牌我看得懂？其他的……",
  },
},
{
  background: "/images/展覽館/展品區.jpg",
  foreground: "/images/character.png",
  soundEffect: "柔和緩慢的鋼琴",
  conversation: {
    speaker: SpeakerType.XI,
    content: "也許，這就是你該先走的路。",
  },
  description: "門的縫隙中透出柔和的虹光，微微閃爍，如同等待著我的決定",
  buttons: [
      { content: "我準備好了。", jumpPage: 1 },
      { content: "這一定是夢……", jumpPage: 2 },
    ],
},
{
  background: "/images/展覽館/展品區.jpg",
  foreground: "/images/character.png",
  soundEffect: "柔和緩慢的鋼琴",
  conversation: {
    speaker: SpeakerType.XI,
    content: "很好，這趟旅程才剛開始，讓我們走吧。",
  },
},
{
  background: "/images/展覽館/展品區.jpg",
  foreground: "/images/character.png",
  soundEffect: "柔和緩慢的鋼琴",
  conversation: {
    speaker: SpeakerType.XI,
    content: "夢也好，不是夢也好，這都不影響它是真的發生過。",
  },
},
{
  background: "bg-[#E5ADAD]",
  description: "下一站：彩虹路與小屋",
},
// ---------------------------------------------------------------------------------------
{
  background: "/images/彩虹路/1-小屋旁.jpeg",
  foreground: "/images/character.png",
  soundEffect: "鳥語花香",
  description: "光芒散去，那扇門似乎把我們傳送來一個不同的時空了，\n儘管這種事也不是第一次經歷，但我還是驚奇的四處張望",
},
{
  background: "/images/彩虹路/1-小屋旁.jpeg",
  foreground: "/images/character.png",
  soundEffect: "鳥語花香",
  description: "夕陽斜照在小屋與粉彩色系的菜園，微風輕輕吹拂，花瓣與葉片微微搖曳。\n門前有一條泛著彩虹色螢光的小徑穿越菜園與柵欄，通向花園外",
  exploreButton: {
    content: "小徑\n通向哪裡？",
    position: {
      x: 1200,
      y: 500,
    },
  },
},
{
  background: "/images/彩虹路/3-花園裡-柵欄前.jpeg",
  foreground: "/images/character.png",
  soundEffect: "鳥語花香",
  description: "柵欄外杳無人煙，只有彩虹小徑獨自漫行，這間花園小屋就像是一座荒野中的綠洲",
  exploreButton: {
    content: "回小屋前",
    position: {
      x: 1200,
      y: 500,
    },
  },
},
{
  background: "/images/彩虹路/1-小屋旁.jpeg",
  foreground: "/images/character.png",
  soundEffect: "鳥語花香",
  conversation: {
    speaker: SpeakerType.PLAYER,
    content: "這裡……好寧靜愜意，讓人忍不住想多待一會兒。",
  },
  description: "雖然沒有確切記憶，但我似乎很久沒有這麼放鬆了",
},
{
  background: "/images/彩虹路/1-小屋旁.jpeg",
  foreground: "/images/character.png",
  soundEffect: "鳥語花香",
  description: "屋內有舒適的沙發，屋外的花園有盛開的花……\n如果一直留在這裡，也不錯吧？",
  exploreButton: {
    content: "探索花園",
    position: {
      x: 1200,
      y: 500,
    },
  },
},
{
  background: "/images/彩虹路/1-小屋旁.jpeg",
  foreground: "/images/character.png",
  soundEffect: "鳥語花香",
  conversation: {
    speaker: SpeakerType.PLAYER,
    content: "這裡的花開得真美……每天都能看到這樣的景色，好像也不錯。",
  },
},
{
  background: "/images/彩虹路/1-小屋旁.jpeg",
  foreground: "/images/character.png",
  soundEffect: "鳥語花香",
  conversation: {
    speaker: SpeakerType.XI,
    content: "細水長流的幸福，也是一種選擇。",
  },
  exploreButton: {
    content: "在屋簷前坐下",
    position: {
      x: 1200,
      y: 500,
    },
  },
  description: "曦流從花叢採了一些花葉，進屋沖了一壺茶",
},
{
  background: "/images/彩虹路/2-花園裡.jpeg",
  soundEffect: "鳥語花香",
  conversation: {
    speaker: SpeakerType.PLAYER,
    content: "這味道……好溫暖，讓人不想離開。",
  },
  description: "我端起花草茶，輕輕啜飲",
},
{
  background: "/images/彩虹路/2-花園裡.jpeg",
  soundEffect: "鳥語花香",
  conversation: {
    speaker: SpeakerType.XI,
    content: "平淡的生活不一定乏味，平靜之中，也有許多值得珍惜的時刻。\n你有曾放慢步調與日常對話過嗎？",
  },
  description: "曦流的側臉與和煦的日光渲染成一幅暖色的畫，她的表情似乎變得柔和了",
},
{
  background: "/images/彩虹路/3-花園裡-柵欄前.jpeg",
  foreground: "/images/character.png",
  soundEffect: "鳥語花香",
  conversation: {
    speaker: SpeakerType.XI,
    content: "這條路，通往變化與冒險，願意走一遭嗎？",
  },
},
{
  background: "/images/彩虹路/3-花園裡-柵欄前.jpeg",
  foreground: "/images/character.png",
  soundEffect: "鳥語花香",
  conversation: {
    speaker: SpeakerType.PLAYER,
    content: "……會很辛苦嗎？",
  },
  description: "畢竟這裡的一切溫暖又令人眷戀",
},
{
  background: "/images/彩虹路/3-花園裡-柵欄前.jpeg",
  foreground: "/images/character.png",
  soundEffect: "鳥語花香",
  conversation: {
    speaker: SpeakerType.XI,
    content: "如果那裡有你好奇的東西，就走下去看看。變化是怎麼發生的，只有在路上才能知道。",
  },
  description: "曦流起身看著我，像是在邀請我同行",
  exploreButton: {
    content: "走吧",
    position: {
      x: 1200,
      y: 500,
    },
  },
},
{
  background: "/images/彩虹路/4-彩虹路-荒原.jpeg",
  foreground: "/images/character.png",
  soundEffect: "羈旅風格的配樂",
  description: "荒野上的景象很遼闊、有些荒蕪；隨著行進，挑戰逐漸浮現",
},
{
  background: "/images/彩虹路/4-彩虹路-荒原.jpeg",
  foreground: "/images/character.png",
  soundEffect: "羈旅風格的配樂、雨聲",
  description: "雲層迅速聚集，下了一場要大不大的雨，該怎麼做呢？",
  buttons: [
    { content: "躲進樹下避雨", jumpPage: 1 },
    { content: "繼續前行", jumpPage: 4},
  ],
},
{
  background: "/images/彩虹路/4-彩虹路-荒原.jpeg",
  foreground: "/images/character.png",
  soundEffect: "羈旅風格的配樂、雨聲",
  description: "在附近的樹下躲雨休息，意外發現樹洞中有一封瓶中信",
  buttons: [
    { content: "查看", jumpPage: 1 },
  ],
},
{
  background: "/images/彩虹路/4-彩虹路-荒原.jpeg",
  foreground: "/images/character.png",
  soundEffect: "羈旅風格的配樂、雨聲",
  description: "「山的那頭有什麼呢？不知道，但光是想到就讓人心跳加快。\n等我歇夠了，就該出發了。」",
},
{
  background: "/images/彩虹路/4-彩虹路-荒原.jpeg",
  foreground: "/images/character.png",
  soundEffect: "羈旅風格的配樂",
  description: "雨停了，身上沒有淋濕",
  conversation: {
    speaker: SpeakerType.XI,
    content: "變化來時，不必急著趕路，先讓心跟上，或許風會替你帶來新的方向。",  
  },
  buttons: [
      { content: "追隨不知名旅人的腳步吧", jumpPage: 4},
    ],
},
{
  background: "/images/彩虹路/4-彩虹路-荒原.jpeg",
  foreground: "/images/character.png",
  soundEffect: "羈旅風格的配樂、雨聲",
  description: "雨水帶來沁涼的青草氣息，我決定來場難得的雨中漫步。\n在路邊泥濘中撿到一封瓶中信",
  buttons: [
    { content: "查看", jumpPage: 1 },
  ],
},
{
  background: "/images/彩虹路/4-彩虹路-荒原.jpeg",
  foreground: "/images/character.png",
  soundEffect: "羈旅風格的配樂、雨聲",
  description: "「有人說，那座山裡有看過就忘不了的風景。\n我不信，怎麼會有這種事？\n所以我決定去看看。」",
},
{
  background: "/images/彩虹路/4-彩虹路-荒原.jpeg",
  foreground: "/images/character.png",
  soundEffect: "羈旅風格的配樂",
  conversation: {
    speaker: SpeakerType.XI,
    content: "踏進未知的風雨裡，每一步都可能遇見意想不到的風景。",
    },
  buttons: [
    { content: "追隨不知名旅人的腳步吧", jumpPage: 1},
    ],
},
{
  background: "/images/彩虹路/4-彩虹路-荒原.jpeg",
  foreground: "/images/character.png",
  soundEffect: "羈旅風格的配樂",
  description: "彩虹小徑攀上一座一座的山坡，看起來路途崎嶇；如果放眼遠眺的話還是隱約看得到目標前往的山",
  buttons: [
    { content: "跟隨彩虹小徑的指引", jumpPage: 1 },
    { content: "脫離彩虹小徑抄近路", jumpPage: 3},
  ],
},
{
  background: "/images/彩虹路/5-彩虹路-山裡.jpg",
  foreground: "/images/character.png",
  soundEffect: "樹林溪水配樂",
  conversation: {
    speaker: SpeakerType.PLAYER,
    content: "……！",
  },
  description: "壯闊的奇景漸漸在眼前展開，小徑的色彩溶化進淺淺的溪谷，剩下碎石熠熠折射出虹光；兩側的山壁流轉瑰麗的礦物光澤，成為天地間的垂直流彩",
},
{
  jumpPage: 3,
  background: "/images/彩虹路/5-彩虹路-山裡.jpg",
  foreground: "/images/character.png",
  soundEffect: "樹林溪水配樂",
  conversation: {
    speaker: SpeakerType.XI,
    content: "跟著光走，借著過去的餘暉，可以讓自己看得更遠。",
  },
  description: "看著不可名狀的美景，我說不出足以形容它的詞彙，就連曦流都有些出神",
},
{
  background: "/images/彩虹路/5-彩虹路-山裡.jpg",
  foreground: "/images/character.png",
  soundEffect: "樹林溪水配樂",
  conversation: {
    speaker: SpeakerType.PLAYER,
    content: "……！",
  },
  description: "壯闊的奇景漸漸在眼前展開，小徑的色彩溶化進淺淺的溪谷，剩下碎石熠熠折射出虹光；兩側的山壁流轉瑰麗的礦物光澤，成為天地間的垂直流彩",
},
{
  background: "/images/彩虹路/5-彩虹路-山裡.jpg",
  foreground: "/images/character.png",
  soundEffect: "樹林溪水配樂",
  conversation: {
    speaker: SpeakerType.XI,
    content: "隨著心中的微光前行，或許在某個轉角，會遇見意想不到的風景。",
  },
  description: "看著不可名狀的美景，我說不出足以形容它的詞彙，就連曦流都有些出神",
},
{
  background: "/images/彩虹路/5-彩虹路-山裡.jpg",
  foreground: "/images/character.png",
  soundEffect: "樹林溪水配樂",
  conversation: {
    speaker: SpeakerType.XI,
    content: "你看那邊。",
  },
  description: "站在高處遠眺，彩虹屋仍在遠方，菜園與小屋的景色未曾改變，但我已經不再是剛踏上旅途的那個人",
},
{
  background: "/images/彩虹路/5-彩虹路-山裡.jpg",
  foreground: "/images/character.png",
  soundEffect: "樹林溪水配樂",
  conversation: {
    speaker: SpeakerType.PLAYER,
    content: "原來……每條路都有值得珍惜的時刻，也有需要面對的挑戰。",
  },
  description: "從花園小屋的悠閒午後、到彩虹溪谷的冒險旅途，我體驗了截然不同的生活魅力，感覺從未有過的生命慾在山巔的風裡萌發",
},
{
  background: "/images/彩虹路/5-彩虹路-山裡.jpg",
  foreground: "/images/character.png",
  soundEffect: "樹林溪水配樂",
  conversation: {
    speaker: SpeakerType.XI,
    content: "你的眼裡，也有彩虹了。",
  },
  description: "我對上了曦流偏頭凝視的目光",
},
{
  background: "/images/彩虹路/5-彩虹路-山裡.jpg",
  soundEffect: "樹林溪水配樂",
  conversation: {
    speaker: SpeakerType.XI,
    content: "這是這趟路途的紀念，送給你吧。",
  },
  description: "曦流拿出了一個裡面裝著碎花的小紗袋、和一個彩虹紋理的石頭",
},
{
  background: "/images/彩虹路/5-彩虹路-山裡.jpg",
  soundEffect: "樹林溪水配樂",
  conversation: {
    speaker: SpeakerType.PLAYER,
    content: "這是妳幫我蒐集到的嗎？我可以收下嗎？",
  },
  description: "我驚喜地伸出手，在碰到紀念品的瞬間，周圍同時籠罩一層白光，強光中景物迅速抽換……",
},
{
  background: "bg-white",
  conversation: {
    speaker: SpeakerType.PLAYER,
    content: "……！？",
  },
},
// ---------------------------------------------------------------------------------------------
{
  background: "/images/展覽館/展品區.jpg",
  soundEffect: "柔和緩慢的鋼琴",
  description: "光芒散去後，周圍的空間開始具象化，看起來我們被傳送到了另一個空間，而這裡看起來似曾相識",
},

];