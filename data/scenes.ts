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
    soundEffect: "/soundEffects/Explosions and Screams.mp3",
    backgroundMusic: "/soundEffects/Crowd Screams.mp3",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "！！",
    },
  },
  {
    background: "/images/city-color.jpg",
    description:
      "我意識到到自己躺在地上動彈不得，劇痛忽然襲擊全身，帶來一陣一陣暈眩",
  },
  {
    background: "/images/city-color.jpg",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "發生什麼事了？怎麼這麼痛？誰來救救我？…我可能快撐不下去了…",
    },
  },
  {
    background: "/images/city-color.jpg",
    description: "想到這裡，視線越來越模糊…",
    backgroundMusic: "stop",
  },
  {
    background: "bg-white",
    backgroundMusic: "/soundEffects/Mystery Unveiled.mp3",
  },
  {
    background: "bg-white",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "這裡是……哪裡？",
    },
  },
  {
    background: "bg-white",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "怎麼回事……？我記得剛剛還在……",
    },
  },
  {
    background: "bg-white",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "……在哪？",
    },
  },
  {
    background: "bg-white",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "……",
    },
  },
  {
    background: "bg-white",
    description: "記憶空白帶來的混亂悄悄的在啃蝕著我",
  },
  {
    background: "bg-white",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "前方有光——或許，只要靠近那裡，就能找到答案",
    },
  },
  {
    background: "bg-white",
    description: "遠方閃爍的光點開始接近，逐漸顯現出模糊的輪廓",
  },
  {
    background: "bg-white",
    foreground: "/images/character.png",
    description: "一個身影從光霧中走來，帶著一種平靜的空靈感",
  },
  {
    background: "bg-white",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.XI,
      content: "你醒了。",
    },
  },
  {
    background: "bg-white",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "……醒了？你是誰？",
    },
  },
  {
    background: "bg-white",
    description: "她沒有立刻回答，而是輕輕伸出手，手心攤開",
  },
  {
    background: "bg-white",
    description: "她的手掌心，浮現出一小撮閃爍的沙粒，緩緩飄散，隨風消逝",
  },
  {
    background: "bg-white",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.XI,
      content:
        "我是誰不重要，你還記得你是誰嗎？\n記憶，就像這些沙子一樣。它從你指縫間流走了。",
    },
  },
  {
    background: "bg-white",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "這……為什麼……我記得的事，好像變得模糊了……",
    },
    description: "我試圖接住光點，但它們從指縫間滑落",
  },
  {
    background: "bg-white",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.XI,
      content: "不用擔心，這些片段不會就此消失。它們只是等待你重新發現。",
    },
  },
  {
    background: "bg-white",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "重新發現？",
    },
  },
  {
    background: "bg-white",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.XI,
      content: "一起來吧，慢慢來，我們會一起找到屬於你的碎片的。",
    },
  },
  {
    background: "bg-white",
  },
  {
    background: "/images/展覽館/gallery-pink-orig.png",
    foreground: "/images/character.png",
    description: "現在是什麼情況？先弄清楚一下好了",
    exploreButton: {
      content: "詢問曦流",
      position: {
        x: 70,
        y: 70,
      },
    },
  },
  {
    background: "/images/展覽館/gallery-pink-orig.png",
    foreground: "/images/character.png",
    description: "感覺是問不出實際內容了。還是先自己觀察看看？",
    exploreButton: {
      content: "環顧四周",
      position: {
        x: 70,
        y: 70,
      },
    },
  },
  {
    background: "/images/展覽館/gallery-pink-orig.png",
    foreground: "/images/character.png",
    description:
      "這座館內沒有其他人，由四面牆圍出四方型的對稱空間，空間不大、但不至於有壓迫感",
    exploreButton: {
      content: "觀察展品",
      position: {
        x: 70,
        y: 70,
      },
    },
  },
  {
    background: "/images/展覽館/gallery-pink-orig.png",
    foreground: "/images/character.png",
    description: "這空間正中央從天花板垂吊著一些畫框，但大致上都框著空白的畫布",
    exploreButton: {
      content: "觀察拱型簾幕",
      position: {
        x: 70,
        y: 70,
      },
    },
  },
  {
    background: "/images/展覽館/gallery-pink-orig.png",
    foreground: "/images/character.png",
    description:
      "周圍四面牆上各有一道拱型簾幕，帶有些許厚重感，類似舞台的布幕。\n這些布幕分別是櫻粉、湖綠、赭紅、與石灰色的",
  },
  {
    background: "/images/展覽館/gallery-pink-orig.png",
    foreground: "/images/character.png",
    description:
      "四道簾幕的中央，各別著一塊金屬銘牌，之中三塊都刻著一種繁複而神秘的符文，唯獨櫻粉色簾幕上的銘牌文字，是能理解的——",
  },
  {
    background: "/images/展覽館/gallery-pink-orig.png",
    foreground: "/images/character.png",
    description:
      "「光雨落下的地方，時間曾在這裡停歇。\n黃昏的屋簷下，你曾駐足，目送風掀起簾幕，\n照亮流轉不定的色彩。」",
  },
  {
    background: "/images/展覽館/gallery-pink-orig.png",
    foreground: "/images/character.png",
    description: "讀完後，簾幕無聲地向兩側揭開，露出門後的空間——",
  },
  {
    background: "/images/展覽館/展品區.jpg",
    foreground: "/images/character.png",
    description:
      "看起來像一個小展間，展櫃和畫框都是空的，似乎等待著什麼被寫入；\n展櫃後方有一扇門",
  },
  {
    background: "/images/展覽館/展品區.jpg",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.XI,
      content: "你似乎有疑問？",
    },
  },
  {
    background: "/images/展覽館/展品區.jpg",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "……這裡是什麼地方？",
    },
  },
  {
    background: "/images/展覽館/展品區.jpg",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.XI,
      content: "這裡是你選擇進入的地方。",
    },
  },
  {
    background: "/images/展覽館/展品區.jpg",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "……",
    },
    description: "語氣些許淡然，回應超級含糊……",
  },
  {
    background: "/images/展覽館/展品區.jpg",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "可是，為什麼只有這裡的銘牌我看得懂？其他的……",
    },
  },
  {
    background: "/images/展覽館/展品區.jpg",
    foreground: "/images/character.png",
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
    jumpPage: 2,
    background: "/images/展覽館/展品區.jpg",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.XI,
      content: "很好，這趟旅程才剛開始，讓我們走吧。",
    },
  },
  {
    background: "/images/展覽館/展品區.jpg",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.XI,
      content: "夢也好，不是夢也好，這都不影響它是真的發生過。",
    },
  },
  {
    background: "bg-[#A95473]",
    description: "下一站：彩虹路與小屋",
    backgroundMusic: "stop",
  },
  // ---------------------------------------------------------------------------------------
  {
    background: "/images/彩虹路/1-小屋旁.jpeg",
    foreground: "/images/character.png",
    backgroundMusic: "/soundEffects/Joyful Violin - Rainbow Road.mp3",
    description:
      "光芒散去，那扇門似乎把我們傳送來一個不同的時空了，\n儘管這種事也不是第一次經歷，但我還是驚奇的四處張望",
  },
  {
    background: "/images/彩虹路/1-小屋旁.jpeg",
    foreground: "/images/character.png",
    description:
      "夕陽斜照在小屋與粉彩色系的菜園，微風輕輕吹拂，花瓣與葉片微微搖曳。\n門前有一條泛著彩虹色螢光的小徑穿越菜園與柵欄，通向花園外",
    exploreButton: {
      content: "小徑\n通向哪裡？",
      position: {
        x: 70,
        y: 70,
      },
    },
  },
  {
    background: "/images/彩虹路/3-花園裡-柵欄前.jpeg",
    foreground: "/images/character.png",
    description:
      "柵欄外杳無人煙，只有彩虹小徑獨自漫行，這間花園小屋就像是一座荒野中的綠洲",
    buttons: [{ content: "回小屋前", jumpPage: 1 }],
  },
  {
    background: "/images/彩虹路/1-小屋旁.jpeg",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "這裡……好寧靜愜意，讓人忍不住想多待一會兒。",
    },
    description: "雖然沒有確切記憶，但我似乎很久沒有這麼放鬆了",
  },
  {
    background: "/images/彩虹路/1-小屋旁.jpeg",
    foreground: "/images/character.png",
    description:
      "屋內有舒適的沙發，屋外的花園有盛開的花……\n如果一直留在這裡，也不錯吧？",
    exploreButton: {
      content: "探索花園",
      position: {
        x: 70,
        y: 70,
      },
    },
  },
  {
    background: "/images/彩虹路/1-小屋旁.jpeg",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "這裡的花開得真美……每天都能看到這樣的景色，好像也不錯。",
    },
  },
  {
    background: "/images/彩虹路/1-小屋旁.jpeg",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.XI,
      content: "細水長流的幸福，也是一種選擇。",
    },
    exploreButton: {
      content: "在屋簷前\n坐下",
      position: {
        x: 70,
        y: 70,
      },
    },
    description: "曦流從花叢採了一些花葉，進屋沖了一壺茶",
  },
  {
    background: "/images/彩虹路/2-花園裡.jpeg",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "這味道……好溫暖，讓人不想離開。",
    },
    description: "我端起花草茶，輕輕啜飲",
  },
  {
    background: "/images/彩虹路/2-花園裡.jpeg",
    conversation: {
      speaker: SpeakerType.XI,
      content:
        "平淡的生活不一定乏味，平靜之中，也有許多值得珍惜的時刻。\n你有曾放慢步調與日常對話過嗎？",
    },
    description:
      "曦流的側臉與和煦的日光渲染成一幅暖色的畫，她的表情似乎變得柔和了",
  },
  {
    background: "/images/彩虹路/3-花園裡-柵欄前.jpeg",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.XI,
      content: "這條路，通往變化與冒險，願意走一遭嗎？",
    },
  },
  {
    background: "/images/彩虹路/3-花園裡-柵欄前.jpeg",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "……會很辛苦嗎？",
    },
    description: "畢竟這裡的一切溫暖又令人眷戀",
  },
  {
    background: "/images/彩虹路/3-花園裡-柵欄前.jpeg",
    foreground: "/images/character.png",
    backgroundMusic: "stop",
    conversation: {
      speaker: SpeakerType.XI,
      content:
        "如果那裡有你好奇的東西，就走下去看看。變化是怎麼發生的，只有在路上才能知道。",
    },
    description: "曦流起身看著我，像是在邀請我同行",
    buttons: [{ content: "走吧", jumpPage: 1 }],
  },
  {
    background: "/images/彩虹路/4-彩虹路-荒原.jpeg",
    foreground: "/images/character.png",
    description: "荒野上的景象很遼闊、有些荒蕪；隨著行進，挑戰逐漸浮現",
  },
  {
    background: "/images/彩虹路/4-彩虹路-荒原.jpeg",
    foreground: "/images/character.png",
    description: "雲層迅速聚集，下了一場要大不大的雨，該怎麼做呢？",
    buttons: [
      { content: "躲進樹下避雨", jumpPage: 1 },
      { content: "繼續前行", jumpPage: 4 },
    ],
  },
  {
    background: "/images/彩虹路/4-彩虹路-荒原.jpeg",
    foreground: "/images/character.png",
    description: "在附近的樹下躲雨休息，意外發現樹洞中有一封瓶中信",
    buttons: [{ content: "查看", jumpPage: 1 }],
  },
  {
    background: "/images/彩虹路/4-彩虹路-荒原.jpeg",
    foreground: "/images/character.png",
    description:
      "「山的那頭有什麼呢？不知道，但光是想到就讓人心跳加快。\n等我歇夠了，就該出發了。」",
  },
  {
    background: "/images/彩虹路/4-彩虹路-荒原.jpeg",
    foreground: "/images/character.png",
    description: "雨停了，身上沒有淋濕",
    conversation: {
      speaker: SpeakerType.XI,
      content: "變化來時，不必急著趕路，先讓心跟上，或許風會替你帶來新的方向。",
    },
    buttons: [{ content: "追隨不知名旅人的腳步吧", jumpPage: 4 }],
  },
  {
    background: "/images/彩虹路/4-彩虹路-荒原.jpeg",
    foreground: "/images/character.png",
    description:
      "雨水帶來沁涼的青草氣息，我決定來場難得的雨中漫步。\n在路邊泥濘中撿到一封瓶中信",
    buttons: [{ content: "查看", jumpPage: 1 }],
  },
  {
    background: "/images/彩虹路/4-彩虹路-荒原.jpeg",
    foreground: "/images/character.png",
    description:
      "「有人說，那座山裡有看過就忘不了的風景。\n我不信，怎麼會有這種事？\n所以我決定去看看。」",
  },
  {
    background: "/images/彩虹路/4-彩虹路-荒原.jpeg",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.XI,
      content: "踏進未知的風雨裡，每一步都可能遇見意想不到的風景。",
    },
    buttons: [{ content: "追隨不知名旅人的腳步吧", jumpPage: 1 }],
  },
  {
    background: "/images/彩虹路/4-彩虹路-荒原.jpeg",
    foreground: "/images/character.png",
    backgroundMusic: "stop",
    description:
      "彩虹小徑攀上一座一座的山坡，看起來路途崎嶇；如果放眼遠眺的話還是隱約看得到目標前往的山",
    buttons: [
      { content: "跟隨彩虹小徑的指引", jumpPage: 1 },
      { content: "脫離彩虹小徑抄近路", jumpPage: 3 },
    ],
  },
  {
    background: "/images/彩虹路/5-彩虹路-山裡.jpg",
    foreground: "/images/character.png",
    backgroundMusic: "/soundEffects/Cant Lose You Instrumental.mp3",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "……！",
    },
    description:
      "壯闊的奇景漸漸在眼前展開，小徑的色彩溶化進淺淺的溪谷，剩下碎石熠熠折射出虹光；兩側的山壁流轉瑰麗的礦物光澤，成為天地間的垂直流彩",
  },
  {
    jumpPage: 3,
    background: "/images/彩虹路/5-彩虹路-山裡.jpg",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.XI,
      content: "跟著光走，借著過去的餘暉，可以讓自己看得更遠。",
    },
    description:
      "看著不可名狀的美景，我說不出足以形容它的詞彙，就連曦流都有些出神",
  },
  {
    background: "/images/彩虹路/5-彩虹路-山裡.jpg",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "……！",
    },
    description:
      "壯闊的奇景漸漸在眼前展開，小徑的色彩溶化進淺淺的溪谷，剩下碎石熠熠折射出虹光；兩側的山壁流轉瑰麗的礦物光澤，成為天地間的垂直流彩",
  },
  {
    background: "/images/彩虹路/5-彩虹路-山裡.jpg",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.XI,
      content: "隨著心中的微光前行，或許在某個轉角，會遇見意想不到的風景。",
    },
    description:
      "看著不可名狀的美景，我說不出足以形容它的詞彙，就連曦流都有些出神",
  },
  {
    background: "/images/彩虹路/5-彩虹路-山裡.jpg",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.XI,
      content: "你看那邊。",
    },
    description:
      "站在高處遠眺，彩虹屋仍在遠方，菜園與小屋的景色未曾改變，但我已經不再是剛踏上旅途的那個人",
  },
  {
    background: "/images/彩虹路/5-彩虹路-山裡.jpg",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "原來……每條路都有值得珍惜的時刻，也有需要面對的挑戰。",
    },
    description:
      "從花園小屋的悠閒午後、到彩虹溪谷的冒險旅途，我體驗了截然不同的生活魅力，感覺從未有過的生命慾在山巔的風裡萌發",
  },
  {
    background: "/images/彩虹路/5-彩虹路-山裡.jpg",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.XI,
      content: "你的眼裡，也有彩虹了。",
    },
    description: "我對上了曦流偏頭凝視的目光",
  },
  {
    background: "/images/彩虹路/5-彩虹路-山裡.jpg",
    conversation: {
      speaker: SpeakerType.XI,
      content: "這是這趟路途的紀念，送給你吧。",
    },
    description: "曦流拿出了一個裡面裝著碎花的小紗袋、和一個彩虹紋理的石頭",
  },
  {
    background: "/images/彩虹路/5-彩虹路-山裡.jpg",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "這是妳幫我蒐集到的嗎？我可以收下嗎？",
    },
    description:
      "我驚喜地伸出手，在碰到紀念品的瞬間，周圍同時籠罩一層白光，強光中景物迅速抽換……",
  },
  {
    background: "bg-white",
    backgroundMusic: "stop",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "……！？",
    },
  },

  // ---------------------------------------------------------------------------------------------

  {
    background: "/images/展覽館/展品區.jpg",
    foreground: "/images/character.png",
    backgroundMusic: "/soundEffects/Mystery Unveiled.mp3",
    description:
      "熟悉的展區輪廓重新浮現，但這次，剛剛還空蕩蕩的空間，如今已經悄然變化——展區中央鋪滿了柔軟的草地，一道道彩虹色的小徑交錯穿行，彷彿陽光灑落後留下的溫暖痕跡",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "我們難道是回來了？這裡變了？",
    },
  },
  {
    background: "/images/展覽館/展品區.jpg",
    foreground: "/images/character.png",
    description:
      "原本空無一物的展櫃，此刻靜靜擺放著一件嶄新的藏品，款式跟剛才溪流給的紀念品有些異曲同工",
    conversation: {
      speaker: SpeakerType.XI,
      content: "這裡一直在變，只是你現在才注意到。",
    },
  },
  {
    background: "/images/展覽館/展品區.jpg",
    foreground: "/images/character.png",
    description:
      "曦流像預想中的一樣並沒有回應，但一雙帶著敘事的眼眸瞥向展覽館的另一側，我也看了過去",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "這才是這個小展間真正的樣貌，對嗎？",
    },
  },
  {
    background: "/images/展覽館/gallery-green-orig.png",
    foreground: "/images/character.png",
    description: "湖綠色那一道拱型布幕上的金屬銘牌閃過一抹碎光",
    exploreButton: {
      content: "靠近查看",
      position: {
        x: 70,
        y: 70,
      },
    },
  },
  {
    background: "/images/展覽館/gallery-pink-orig.png",
    description:
      "「有些星星落入掌心，\n有些則隨波閃爍。\n但它們點亮夜空的那一刻，已經足夠美麗。」",
  },
  {
    background: "/images/展覽館/gallery-green-orig.png",
    foreground: "/images/character.png",
    description: "讀完後，簾幕無聲地向兩側揭開，露出門後的空間——",
    exploreButton: {
      content: "進入空間",
      position: {
        x: 70,
        y: 70,
      },
    },
  },
  {
    background: "/images/展覽館/展品區.jpg",
    foreground: "/images/character.png",
    description:
      "跟剛才初次進入彩虹路與小屋的小展間一樣，空蕩蕩的，只有一扇門和空展櫃",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "不知道這扇門背後又會是什麼？",
    },
  },
  {
    background: "/images/展覽館/展品區.jpg",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.XI,
      content: "也許，這就是你該先走的路。",
    },
    description: "門的縫隙中透出柔和的虹光，微微閃爍，如同等待著我的決定",
    buttons: [
      { content: "我準備好了。", jumpPage: 1 },
      { content: "這果然是夢……", jumpPage: 2 },
    ],
  },
  {
    jumpPage: 2,
    background: "/images/展覽館/展品區.jpg",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.XI,
      content: "很好，這趟旅程才剛開始，讓我們走吧。",
    },
  },
  {
    background: "/images/展覽館/展品區.jpg",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.XI,
      content: "夢也好，不是夢也好，這都不影響它是真的發生過。",
    },
  },
  {
    background: "bg-[#4B7679]",
    description: "下一站：星湖",
    backgroundMusic: "stop",
  },

  // ----------------------------------------------------------------------------------------------

  {
    background: "/images/星湖/2-lake.jpg",
    foreground: "/images/character.png",
    backgroundMusic: "/soundEffects/Thoughtful - Light Music.mp3",
    description:
      "視線漸漸清晰，眼前展開一片靜謐的湖泊，水面深邃如夜空，點綴著無數漂浮的星星。這些星星時而閃爍，時而輕輕旋轉，像是溫柔地呼吸著光",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "……！",
    },
  },
  {
    background: "/images/星湖/2-lake.jpg",
    foreground: "/images/character.png",
    description:
      "星星隨著水波輕輕顫動，發出微弱的鈴聲，閃爍著朦朧的光暈。我直覺那些不只是星星，而是某種更能感召我的渴望的美好事物",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "這些星星……是不是可以撈起來？",
    },
  },
  {
    background: "/images/星湖/2-lake.jpg",
    foreground: "/images/character.png",
    description: "曦流遞上捕蟲網，並協助划船靠近星星",
    conversation: {
      speaker: SpeakerType.XI,
      content: "試試看吧。",
    },
  },
  {
    background: "/images/星湖/2-surface.png",
    conversation: {
      speaker: SpeakerType.XI,
      content: "試著點擊星星將它們撈起來吧。",
    },
    exploreButton: {
      content: "小時候的目標",
      position: {
        x: 70,
        y: 70,
      },
    },
  },
  {
    background: "/images/星湖/2-surface.png",
    conversation: {
      speaker: SpeakerType.XI,
      content: "試著點擊星星將它們撈起來吧。",
    },
    exploreButton: {
      content: "競選社團幹部",
      position: {
        x: 70,
        y: 70,
      },
    },
  },
  {
    background: "/images/星湖/2-surface.png",
    conversation: {
      speaker: SpeakerType.XI,
      content: "試著點擊星星將它們撈起來吧。",
    },
    exploreButton: {
      content: "演唱會的票",
      position: {
        x: 70,
        y: 70,
      },
    },
  },
  {
    background: "/images/星湖/2-surface.png",
    conversation: {
      speaker: SpeakerType.XI,
      content: "試著點擊星星將它們撈起來吧。",
    },
    exploreButton: {
      content: "對自由的嚮往",
      position: {
        x: 70,
        y: 70,
      },
    },
  },
  {
    background: "/images/星湖/2-surface.png",
    conversation: {
      speaker: SpeakerType.XI,
      content: "試著點擊星星將它們撈起來吧。",
    },
    exploreButton: {
      content: "喜歡過的人",
      position: {
        x: 70,
        y: 70,
      },
    },
  },
  {
    background: "/images/星湖/2-surface.png",
    conversation: {
      speaker: SpeakerType.XI,
      content: "試著點擊星星將它們撈起來吧。",
    },
    exploreButton: {
      content: "期待進入的公司",
      position: {
        x: 70,
        y: 70,
      },
    },
  },
  {
    background: "/images/星湖/2-lake.jpg",
    foreground: "/images/character.png",
    description: "嘗試了幾次，但大部分的星星在撈起來前就消散了",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "……",
    },
  },
  {
    background: "/images/星湖/2-lake.jpg",
    foreground: "/images/character.png",
    description:
      "曦流一如往常的平靜，好像她並不像我一樣情緒因為這些星星而波動嘗試了幾次，但大部分的星星在撈起來前就消散了",
    conversation: {
      speaker: SpeakerType.XI,
      content: "還要繼續撈嗎？",
    },
  },
  {
    background: "/images/星湖/2-lake.jpg",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "這些星星，一定代表著什麼……也許是我的願望，也許是我的夢想。",
    },
  },
  {
    background: "/images/星湖/2-lake.jpg",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "可是……為什麼有些星星在我努力想觸及時就消失了？",
    },
  },
  {
    background: "/images/星湖/2-lake.jpg",
    foreground: "/images/character.png",
    description: "曦流放下槳，迎向我的目光多了認真與探究",
    conversation: {
      speaker: SpeakerType.XI,
      content: "為什麼你想得到這些星星？",
    },
  },
  {
    background: "/images/星湖/2-lake.jpg",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "因為它們很美……",
    },
  },
  {
    background: "/images/星湖/2-lake.jpg",
    foreground: "/images/character.png",
    description:
      "曦流捧起星星消失處的湖水，上面似乎有些浮動的光點，逐漸匯聚成一幅畫面",
    conversation: {
      speaker: SpeakerType.XI,
      content: "即使沒有被握在手裡，也不妨礙它們的美麗吧？",
    },
  },
  {
    background: "/images/星湖/2-surface.png",
    description:
      "那時候第一次有了渴望靠自己的努力來獲得些什麼的意念，每天都覺得這樣的自己很帥，獲得了熱血玩社團的青春回憶",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content:
        "這畫面是中學吉他社的團練活動吧？對了，我曾經因為很想擔任幹部，而度過一段每天練吉他的時期",
    },
  },
  {
    background: "/images/星湖/2-surface.png",
    description:
      "我還沉浸在剛拾回的上一段回憶裡，直到水波晃動，水面的光暈重構成另一幅畫面",
    conversation: {
      speaker: SpeakerType.XI,
      content: "想起什麼了嗎？",
    },
  },
  {
    background: "/images/星湖/2-surface.png",
    description:
      "雖然從來沒有買到演唱會的票，但我還是買來專輯放在電腦桌上，只要工作累了看一眼，我就可以重新充滿力量",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content:
        "這是我最喜歡的樂團，它們的歌陪我度過了無數個睡不著的夜晚，雖然通常都是因為聽太嗨才睡不著",
    },
  },
  {
    background: "/images/星湖/2-lake.jpg",
    foreground: "/images/character.png",
    description:
      "滿湖星光映在曦流的眼底，此時的她，臉上竟然掛著見面以來從未有過的清淺笑意",
    conversation: {
      speaker: SpeakerType.XI,
      content:
        "是你讓這些星星可以持續發光，而不只是一瞬綻放而已。\n我覺得或許你本身才是發光的本質。",
    },
  },
  {
    background: "/images/星湖/2-lake.jpg",
    foreground: "/images/character.png",
    description: "原來撈星星只是一場與星光玩的遊戲，沒有目的，好玩就好",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content:
        "這些光，我一直都擁有著嗎？即使沒有握在手裡，我仍然為它的美好所感動",
    },
  },
  {
    background: "/images/星湖/2-lake.jpg",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.XI,
      content: "還想繼續撈嗎？還是放下槳，一起看星星？",
    },
    buttons: [
      { content: "那就繼續這場追逐光的遊戲吧", jumpPage: 1 },
      { content: "我想讓水帶我漂流，享受和星星的偶遇", jumpPage: 1 },
    ],
  },
  {
    background: "/images/星湖/2-lake.jpg",
    foreground: "/images/character.png",
    description: "曦流再次挽袖探向星輝落下的湖面",
    conversation: {
      speaker: SpeakerType.XI,
      content: "水很靜，你也變得安靜了。",
    },
  },
  {
    background: "/images/星湖/2-surface.png",
    foreground: "/images/character.png",
    description:
      "我也將手伸進這孕育星光的湖水中，想細細感受一番；觸到那股清洌的這一瞬間，周圍再次被熟悉的白光籠罩",
  },
  {
    background: "bg-white",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "該回去了啊…",
    },
    backgroundMusic: "stop",
  },

  // ------------------------------------------------------------------------------------------------

  {
    background: "/images/展覽館/展品區.jpg",
    foreground: "/images/character.png",
    soundEffect: "/soundEffects/Mystery Unveiled.mp3",
    description:
      "熟悉的展覽館再次映入眼簾，然而腳下傳來的觸感卻與記憶中的硬地板。\n我們踩在湖水與浮島交錯的濕地上，夜幕般的空間中，星星不僅點綴了湖面，也輕輕漂浮在空中，如同尚未落定的願望。",
  },
  {
    background: "/images/展覽館/展品區.jpg",
    foreground: "/images/character.png",
    description:
      "展櫃裡悄然多了一件新展品，散發著溫柔的微光，仿若剛從湖心撈起的星星。",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "……它們留在這裡了。",
    },
  },
  {
    background: "/images/展覽館/展品區.jpg",
    foreground: "/images/character.png",
    description:
      "我伸手碰觸一顆懸浮的星星，微光順著指尖流轉，化作細碎的波紋擴散開來。\n沒有多說什麼，我收回手轉身踏入展館深處。",
    conversation: {
      speaker: SpeakerType.XI,
      content: "星星落下了，明天也會升起。",
    },
  },
  {
    background: "/images/展覽館/gallery-brown-orig.png",
    foreground: "/images/character.png",
    description: "就在這時，另一座拱門前的金屬牌閃爍了一下，嶄新的文字悄然浮現",
    exploreButton: {
      content: "靠近查看",
      position: {
        x: 70,
        y: 70,
      },
    },
  },
  {
    background: "/images/展覽館/gallery-pink-orig.png",
    description:
      "「終點遙遠，旅途卻未曾空手而歸。\n裂縫間的花，仍在光裡盛放。\n你，願意看看它們嗎？」",
  },
  {
    background: "/images/展覽館/gallery-brown-orig.png",
    foreground: "/images/character.png",
    description: "讀完後，簾幕無聲地向兩側揭開，露出門後的空間——",
    exploreButton: {
      content: "進入空間",
      position: {
        x: 70,
        y: 70,
      },
    },
  },
  {
    background: "/images/展覽館/展品區.jpg",
    foreground: "/images/character.png",
    description: "不出意外的，裡面是個空蕩蕩的小展間，只有一扇門和一個空的展櫃",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "不知道這扇門背後又會是什麼？",
    },
  },
  {
    background: "/images/展覽館/展品區.jpg",
    foreground: "/images/character.png",
    description: "門的縫隙中透出柔和的虹光，微微閃爍，如同等待著我的決定",
    buttons: [
      { content: "我準備好了。", jumpPage: 1 },
      { content: "這果然還是夢一場……", jumpPage: 2 },
    ],
  },
  {
    jumpPage: 2,
    background: "/images/展覽館/展品區.jpg",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.XI,
      content: "很好，這趟旅程才剛開始，讓我們走吧。",
    },
  },
  {
    background: "/images/展覽館/展品區.jpg",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.XI,
      content: "不過這也不影響它是真的發生過，你覺得呢？",
    },
  },
  {
    background: "bg-[#A25A30]",
    description: "下一站：盛放的列車",
    backgroundMusic: "stop",
  },

  // ----------------------------------------------------------------------------------

  {
    background: "/images/列車/開過來的列車.jpg",
    foreground: "/images/character.png",
    backgroundMusic: "/soundEffects/Whistle - Pufino.mp3",
    description:
      "站在一座廢棄的鐵軌上，列車靜靜地停靠在枕木上，車身斑駁，藤蔓纏繞著窗框，宛如時間在此刻凝結",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "這個場景，好像乘載著很多故事",
    },
    buttons: [{ content: "嘗試進入", jumpPage: 1 }],
  },
  {
    background: "/images/列車/abandoned train.jpg",
    foreground: "/images/character.png",
    description: "車門生鏽半開，側身進入後，野花與綠意填滿了曾經載滿乘客的車廂",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "……！",
    },
  },
  {
    background: "/images/列車/abandoned train.jpg",
    foreground: "/images/character.png",
    description: "雜草長到跟膝蓋的高度，需要跋涉前行",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "這輛列車……廢棄很久了吧？",
    },
  },
  {
    background: "/images/列車/abandoned train.jpg",
    foreground: "/images/character.png",
    description:
      "俯身觸碰一小叢野花，陽光透過車窗澆在金燦燦的花蕊上，在柔韌的花瓣之間輕輕晃動",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "不過，這裡的花長得比精心栽種的還要好。",
    },
  },
  {
    background: "/images/列車/abandoned train.jpg",
    foreground: "/images/character.png",
    description:
      "曦流坐在隱沒在草叢裡的座椅上，倚靠在等高的花枝上，眼神自在得像是正和朋友併排坐著搭車",
    conversation: {
      speaker: SpeakerType.XI,
      content: "某種層面上，列車沒有廢棄，反而是被啟用了。",
    },
    buttons: [{ content: "去坐她旁邊吧", jumpPage: 1 }],
  },
  {
    background: "/images/列車/abandoned train.jpg",
    foreground: "/images/character.png",
    description: "坐下後，發現身旁座位上有兩樣東西",
    buttons: [{ content: "查看紅色圍巾", jumpPage: 1 }],
  },
  {
    background: "/images/列車/abandoned train.jpg",
    description:
      "搭車旅行的畫面，我好像還是小孩子，跟在大人旁邊，有雙溫暖的手幫我整理了圍巾......",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "是家庭旅行的記憶嗎？",
    },
    buttons: [{ content: "查看耳機", jumpPage: 1 }],
  },
  {
    background: "/images/列車/abandoned train.jpg",
    description:
      "好像跟誰吵架了，獨自搭車離開，戴的還是忘了還他的耳機。我記得好像誰也沒有道歉，漸行漸遠了......",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "我：「……如果當時，我說了對不起，會不會不一樣？」",
    },
  },
  {
    background: "/images/列車/abandoned train.jpg",
    foreground: "/images/character.png",
    description:
      "窗邊傳來叮鈴聲，抬頭一看，是一串日式玻璃風鈴，綁著一張寫字的木牌",
    conversation: {
      speaker: SpeakerType.XI,
      content: "也許會，也許不會。你因此覺得很遺憾嗎？",
    },
    buttons: [{ content: "查看玻璃風鈴", jumpPage: 1 }],
  },
  {
    background: "/images/列車/abandoned train.jpg",
    description:
      "木牌上寫著「明年也要一起來掛風鈴」末尾還畫了愛心。\n不過印象中，好像沒有明年了......",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "我：「有些時光很幸福……但它們也會變成某種說不出的痛。」",
    },
  },
  {
    background: "/images/列車/abandoned train.jpg",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.XI,
      content: "那你認為，回憶的價值是什麼？",
    },
  },
  {
    background: "/images/列車/abandoned train.jpg",
    foreground: "/images/character.png",
    description:
      "一陣微風拂來，在滿地花草末梢掀起一陣綠色波浪；風來自車尾少了玻璃的大面窗，框起澄澈的天空",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "或許，遺憾會存在，就是意味著那些過往對我來說很重要",
    },
    buttons: [{ content: "走到窗前", jumpPage: 1 }],
  },
  {
    background: "/images/列車/abandoned train.jpg",
    description:
      "窗邊遺落著一本手帳，我出於好奇翻開查看，有一張舊車票從夾頁飄落",
    buttons: [{ content: "撿起車票", jumpPage: 1 }],
  },
  {
    background: "/images/列車/abandoned train.jpg",
    description:
      "車票有些舊，但是整張完好沒有使用過。\n曾經有機會去國外闖蕩，我卻因為顧慮而選擇留在原地，沒有上車。",
    buttons: [{ content: "閱讀手帳", jumpPage: 1 }],
  },
  {
    background: "/images/列車/abandoned train.jpg",
    description:
      "原來如此，雖然沒有去國外發展，但後來我體驗了一段打工換宿的時期，還因此交到一些朋友，都記錄在手帳裡了",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "有些機會錯過了，就真的回不去了……不過，我可能也因此擁有了什麼",
    },
  },
  {
    background: "/images/列車/abandoned train.jpg",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "奇怪……為什麼回憶裡，遺憾的部分總是特別鮮明？",
    },
  },
  {
    background: "/images/列車/abandoned train.jpg",
    foreground: "/images/character.png",
    description: "曦流不知何時站到我身後",
    conversation: {
      speaker: SpeakerType.XI,
      content: "因為我們總想著後悔的片段吧。",
    },
  },
  {
    background: "/images/列車/abandoned train.jpg",
    foreground: "/images/character.png",
    description: "曦流蹲下身，開始摘地上的花，一枝不夠，還要第二、第三枝......",
    conversation: {
      speaker: SpeakerType.XI,
      content: "但是也提供了土壤，養育下一個契機。",
    },
  },
  {
    background: "/images/列車/abandoned train.jpg",
    foreground: "/images/character.png",
    description:
      "我有點不懂曦流想做什麼，不過也一起蒐集各式各樣的野花，交給了她。\n最後，曦流將它們綑成了一大束野花",
    conversation: {
      speaker: SpeakerType.XI,
      content: "你也來幫我摘一些花吧。",
    },
  },
  {
    background: "/images/列車/abandoned train.jpg",
    foreground: "/images/character.png",
    description:
      "曦流一臉平靜將花束雙手遞向了我，我不禁失笑，一半是因為發覺她出乎意料的率真，一半大概是因為向過去遺憾和解的釋然",
    conversation: {
      speaker: SpeakerType.XI,
      content: "送給你的。向遺憾致敬吧。",
    },
  },
  {
    background: "/images/列車/abandoned train.jpg",
    foreground: "/images/character.png",
    description: "我笑著接下花束，周圍瞬間泛起白光，把車廂包圍",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "謝謝妳！",
    },
  },
  {
    background: "/images/列車/abandoned train.jpg",
    description: "回去吧…",
    backgroundMusic: "stop",
  },

  // ---------------------------------------------------------------------------------

  {
    background: "/images/展覽館/展品區.jpg",
    foreground: "/images/character.png",
    soundEffect: "/soundEffects/Mystery Unveiled.mp3",
    description:
      "回到了展覽館。\n曾經封閉的門，如今成為一節靜止的火車車廂，斑駁的車體被野花覆蓋，搖曳的花影隨微風輕輕起伏。車窗映照出藍天與遼闊的綠地，彷彿時間靜止於此",
  },
  {
    background: "/images/展覽館/展品區.jpg",
    foreground: "/images/character.png",
    description:
      "展櫃裡的花束跟剛才曦流遞給我的一模一樣。似乎每次被傳送回來後，展覽館都會把我們剛才的經歷納入空間裡？",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "……這些花，是從哪裡來的？",
    },
  },
  {
    background: "/images/展覽館/展品區.jpg",
    foreground: "/images/character.png",
    description:
      "我現在幾乎可以確定，我在這座特別的展覽管裡經歷的一切，都是出於我的認知與我曾經的記憶。或許我可以在這裡找回我自己？。",
    conversation: {
      speaker: SpeakerType.XI,
      content: "有些東西，即使旅程無法抵達原定的終點，仍然會在途中綻放。",
    },
  },
  {
    background: "/images/展覽館/gallery-gray-orig.png",
    foreground: "/images/character.png",
    description:
      "目光從展櫃轉向展覽館的深處，前方，第四扇拱門前的金屬牌字跡逐漸浮現",
    exploreButton: {
      content: "靠近查看",
      position: {
        x: 70,
        y: 70,
      },
    },
  },
  {
    background: "/images/展覽館/gallery-pink-orig.png",
    description:
      "「時光靜止於石殿，古樹見證無聲的來去。\n若記憶如落葉，層層覆蓋腳下的路，\n你可願拾起一片，凝視它的紋理？」",
  },
  {
    background: "/images/展覽館/gallery-gray-orig.png",
    foreground: "/images/character.png",
    description:
      "讀完後，簾幕無聲地向兩側揭開，露出門後的空間——但在進入之前，剛才的詩句讓我陷入沉思",
  },
  {
    background: "/images/展覽館/gallery-gray-orig.png",
    foreground: "/images/character.png",
    description: "剛才的詩句裡提到了「記憶」的關鍵字",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "這次的展間，也會為我帶回更多記憶嗎？",
    },
  },
  {
    background: "/images/展覽館/gallery-gray-orig.png",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.XI,
      content: "只有進去之後，你才能找到答案。",
    },
    exploreButton: {
      content: "進入空間",
      position: {
        x: 70,
        y: 70,
      },
    },
  },
  {
    background: "/images/展覽館/展品區.jpg",
    foreground: "/images/character.png",
    description:
      "簾幕後依如往常只有一扇門和空展櫃。\n門的縫隙中透出柔和的虹光，微微閃爍，如同等待著我的決定",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "不知道這扇門背後又會是什麼？",
    },
    buttons: [
      { content: "我準備好了。", jumpPage: 1 },
      { content: "不管發生什麼，這一定就是夢", jumpPage: 2 },
    ],
  },
  {
    jumpPage: 2,
    background: "/images/展覽館/展品區.jpg",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.XI,
      content: "嗯，繼續這趟旅程吧。",
    },
  },
  {
    background: "/images/展覽館/展品區.jpg",
    foreground: "/images/character.png",
    conversation: {
      speaker: SpeakerType.XI,
      content: "即使你表面上否認，事實上你也已經沈浸其中了吧？",
    },
  },
  {
    background: "bg-gray-400",
    description: "下一站：審判殿堂",
    backgroundMusic: "stop",
  },

  // ----------------------------------------------------------------------------

  {
    background: "/images/審判/審判殿堂.jpeg",
    backgroundMusic: "/soundEffects/Pia Maya Lost in Time.mp3",
    description:
      "踏入了一座寧靜的石殿，或許「殿堂」並非最準確的形容。\n它沒有莊嚴的壁畫，取而代之的，是一片矗立於石間的參天古樹。樹根沿著石縫盤繞，藤蔓垂落，空氣中瀰漫著微涼的潮氣與淡淡的木香。",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "太安靜了...對了，曦流去哪裡了？",
    },
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    description: "前方樹前，一道熟悉的身影站在樹影下。\n——是曦流。",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "......！",
    },
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    description:
      "當只是看著那些文字，意識裡隱隱有丟失已久的什麼在翻湧。\n這裡有種力量，好像我可以稍微看到我來到這裡之前的人生輪廓。",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "這地方……和剛才的場景完全不同。",
    },
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    description:
      "曦流的氣質也變了，彷彿她在前幾站中帶給我那種柔和的陪伴感是一種錯覺。\n她的白裙輕輕飄動，像是與這座樹林融為一體，或許這種素淨和悠遠更接近她的本質。",
    conversation: {
      speaker: SpeakerType.XI,
      content: "這裡，是選擇留下痕跡的地方。",
    },
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    description: "選擇？……妳的意思是，我剛才做的那些選擇？",
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    description:
      "曦流輕輕觸碰身後的樹幹，眼前浮現帶著細細光子的畫面，像是點燃了一場無聲的回憶",
    conversation: {
      speaker: SpeakerType.XI,
      content: "你還記得嗎？",
    },
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    description: "現在的你，更偏好哪種人生態度呢？",
    buttons: [
      { content: "安然自得", jumpPage: 1 },
      { content: "享受變化", jumpPage: 1 },
    ],
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    description: "古樹的一部份葉子變成粉紅色的了",
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    description: "現在的你，偏好哪一種面對欲望時的逐夢原則呢？",
    buttons: [
      { content: "奮力追求", jumpPage: 1 },
      { content: "隨緣隨喜", jumpPage: 1 },
    ],
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    description: "古樹的一部份葉子變成藍色的了",
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    description: "現在的你，面對過往的視角偏向哪一種呢？",
    buttons: [
      { content: "對幸福感恩", jumpPage: 1 },
      { content: "與遺憾和解", jumpPage: 1 },
    ],
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    description: "古樹的一部份葉子變成綠色的了，現在整棵樹的葉子都上色了",
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    description:
      "曦流伸出手，輕輕碰觸樹的表面，樹幹上的字跡輕輕閃爍，在末端追加了幾行。\n她早就知道一切吧？",
    conversation: {
      speaker: SpeakerType.XI,
      content: "在來到這裡前，你曾經有一段很長過往。",
    },
    buttons: [
      {
        content: "是，我有過一段人生，在這個世界、這個介面以外的。",
        jumpPage: 1,
      },
    ],
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    conversation: {
      speaker: SpeakerType.XI,
      content: "你在這個世界以外的過去，做的選擇和現在一樣嗎？",
    },
    buttons: [
      { content: "一樣", jumpPage: 1 },
      { content: "有些不一樣", jumpPage: 1 },
      { content: "全都不一樣", jumpPage: 1 },
    ],
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    conversation: {
      speaker: SpeakerType.XI,
      content: "無論你的答案是什麼，它們都無法改變，也不會消失。",
    },
    buttons: [
      { content: "這些選擇是對的嗎？", jumpPage: 1 },
      { content: "所以，這些選擇和我是一體的嗎？", jumpPage: 6 },
    ],
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    conversation: {
      speaker: SpeakerType.XI,
      content:
        "對錯？那是你自己定義的。我們不在這裡審判對錯，而是讓你看看自己。",
    },
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "可是……如果我後悔了呢？",
    },
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    conversation: {
      speaker: SpeakerType.XI,
      content: "後悔也只是一種選擇吧。",
    },
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "……所以，沒有所謂對錯？",
    },
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    conversation: {
      speaker: SpeakerType.XI,
      content:
        "也許有、也許沒有。只是，現在的你，至少知道了你也有要不要後悔的選擇權。",
    },
    buttons: [{ content: "沉默地陷入思考", jumpPage: 4 }],
  },
  {
    jumpPage: 6,
    background: "/images/審判/審判殿堂.jpeg",
    conversation: {
      speaker: SpeakerType.XI,
      content: "你做的決定、你當時的想法、猶豫、渴望，不是都屬於你嗎？",
    },
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "換句話說……無論選了什麼，都是真實的我？",
    },
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    description:
      "曦流視線輕輕掃過周圍。\n這些都是我的？\n我凝視著眼前景色，想找出我和它的連結。",
    conversation: {
      speaker: SpeakerType.XI,
      content: "這裡，都是你的。",
    },
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    description: "曦流能解答我的過去與現在，但仔細想想，我對她一無所知",
    conversation: {
      speaker: SpeakerType.XI,
      content: "……那你呢？",
    },
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    description: "這是我第一次，真正向曦流提問關於她本身的問題。",
    conversation: {
      speaker: SpeakerType.XI,
      content: "我並沒有過去可供審視。",
    },
    buttons: [{ content: "......？", jumpPage: 1 }],
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "……你沒有記憶嗎？",
    },
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    description: "語氣依舊平穩，卻帶著一絲淡淡的遙遠感",
    conversation: {
      speaker: SpeakerType.XI,
      content: "或者說，這裡沒有我的位置。",
    },
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    soundEffect: "她或許是比我想像的，更加不同的存在？",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "……那你是什麼？",
    },
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    description:
      "她時常望著我說話，但這次，她的視線似乎穿透了表面的我，看向了我的靈魂",
    conversation: {
      speaker: SpeakerType.XI,
      content: "我是這片審判殿堂的一部分。\n或者說……我是你的影子。",
    },
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    conversation: {
      speaker: SpeakerType.XI,
      content: "我是——你看不見的自己。",
    },
    buttons: [{ content: "......！", jumpPage: 1 }],
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    description:
      "她輕輕伸出手，示意我看看四周。\n這裡並沒有她的名字，沒有她的過去，也沒有任何痕跡。\n這世界的一切彷彿只和我有關。",
    conversation: {
      speaker: SpeakerType.XI,
      content:
        "從旅程的起點開始，你一直在追尋答案；想知道關於這個世界的意義、還有自己的存在。",
    },
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    description: "她的語氣微妙地柔和了些",
    conversation: {
      speaker: SpeakerType.XI,
      content:
        "你懷疑過，害怕過，也試圖逃避；可是你還是一步步走到了這裡。為什麼？",
    },
    buttons: [{ content: "想說點什麼，但發現自己無法立刻回答", jumpPage: 1 }],
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    conversation: {
      speaker: SpeakerType.XI,
      content:
        "如果你不願意直視這一切，就不會來到這裡。\n你問我是誰；那麼，你又是誰？",
    },
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    description: "這個問題像是一道微光，劃破腦海深處某個未曾觸及的角落",
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    description:
      "這個世界的構成好像是因為我。\n雖然不知道這個虛構世界觀怎麼成型的，但是它完全和我的內在意識吻合。",
    buttons: [{ content: "……我是誰？", jumpPage: 1 }],
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    description:
      "曦流，其實只是沒有實體的概念嗎？\n想到這裡，我抬頭迎向曦流的目光，想確認心中的想法",
    buttons: [{ content: "……你是……", jumpPage: 1 }],
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    description:
      "曦流微不可查的點頭，像是在肯定我的推論......\n她拿出一顆可以放在掌上的小樹遞過來，那就是這次要帶我回去的關鍵吧",
    conversation: {
      speaker: SpeakerType.XI,
      content: "是的。已經沒有什麼是我能解答的了。該出發了。",
    },
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    description: "我大概理解我為什麼在這裡了，我們的下一步要去哪裡呢？",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "……接下來呢？",
    },
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    conversation: {
      speaker: SpeakerType.XI,
      content: "我哪裡都不會去。",
    },
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    description: "她的語氣帶著某種無可動搖的確定，讓我微微一怔",
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    description: "她完全沒有要邁開腳步的意思，跟那顆古樹一樣佇立在原地",
    conversation: {
      speaker: SpeakerType.XI,
      content: "我就是殿堂的一部份。我會留在這裡。",
    },
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    description:
      "這是一個無法改變的事實，我知道的。\n但我還是默默向她伸出手，第一次主動邀請她與我同行。",
  },
  {
    background: "/images/審判/審判殿堂.jpeg",
    description:
      "曦流的眼神依舊沒有波瀾，只是把小樹交到了我手上；帶我離開的白光就此溢出，就這樣要道別了嗎？",
  },
  {
    background: "bg-white",
    conversation: {
      speaker: SpeakerType.XI,
      content: "我一直都在這裡。",
    },
    description: "在白得看不清曦流的輪廓時，傳來了她的低語",
    backgroundMusic: "stop",
  },

  // --------------------------------------------------------------------------------

  {
    background: "/images/展覽館/展品區.jpg",
    backgroundMusic: "/soundEffects/Mystery Unveiled.mp3",
    description:
      "回來了。高聳的樹木在微光下投下層層疊疊的陰影，石柱零星佇立在林間，彷彿見證著一場無聲的告別。\n藍、綠、粉的落葉鋪滿了地面，隨著微風輕輕翻動，像是時光殘留下的片語斷章。",
  },
  {
    background: "/images/展覽館/展品區.jpg",
    description:
      "很寂靜的感覺。……接下來的路，需要由我自己走了吧？\n像是在問自己，也像是在問那片林間，問那個已經不在身邊的人。",
  },
  {
    background: "/images/展覽館/展品區.jpg",
    description:
      "明明剛才她還在這裡，卻像是從來沒有存在過一樣。\n我試圖回憶她的聲音、她的目光、她那些平淡卻真切的話語，\n可這一切如今變得遙遠，像是留在夢境的邊緣，快要被時間沖散了。",
  },
  {
    background: "/images/展覽館/展品區.jpg",
    description:
      "這種感覺算是一種遺憾嗎？\n但心裡確實空了一塊，像有什麼無聲地塌陷下去。",
  },
  {
    background: "/images/展覽館/展品區.jpg",
    description:
      "收回視線，轉身踏入展覽館大廳。\n……不知不覺間，這裡變了；展區變得更加廣闊，原本空曠的展櫃不知何時多了許多展品；\n那些，是我的記憶嗎？",
  },
  {
    background: "/images/展覽館/展品區.jpg",
    soundEffect: "柔和緩慢的鋼琴",
    description:
      "靜靜地走過展覽館，目光掃過這些變化。\n從旅程開始到現在，我曾經疑惑過這間展覽館到底是什麼，為什麼它總是隨著旅程而變化。",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content:
        "我明白了。這裡從來不是一個獨立的地方，它一直與我自己有著千絲萬縷的聯繫。",
    },
  },
  {
    background: "/images/展覽館/展品區.jpg",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content:
        "這裡承載著我的選擇，我的思考，我的猶豫，也承載著我一路走來的感悟與痕跡。\n這間展覽館，是我的內心世界。",
    },
  },
  {
    background: "/images/展覽館/展品區.jpg",
    description:
      "停下腳步，展覽館的中央出現一道門。\n它沒有任何標示，也沒有任何提示，只是一扇靜靜等候的門。",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "直覺從這扇門走出去，就是徹底離開展覽館了。",
    },
  },
  {
    background: "/images/展覽館/展品區.jpg",
    description:
      "準備好離開這個與自己內心相連的地方，回到真正的生命之中了嗎？\n至少這一次，我做了確切的選擇",
    buttons: [{ content: "開門離開", jumpPage: 1 }],
  },
  {
    background: "bg-[#335CA4]",
    description: "下一站：？？？",
  },

  // ----------------------------------------------------------------------------------------------

  {
    background: "/images/道別/party.png",
    soundEffect: "海浪聲",
    description:
      "門後是一片熱帶密林，我撥開樹叢，沙灘派對的燈火映照在波光粼粼的海面上。\n與熱鬧的畫面違和的是，派對裡一個人都沒有，一切都顯得輕盈而遙遠",
  },
  {
    background: "/images/道別/party.png",
    foreground: "/images/character.png",
    soundEffect: "海浪聲",
    description:
      "然而，當視線一轉——\n不遠處，一個熟悉的身影逆光站著，微風拂動她的髮絲，讓她看起來有些不真實",
  },
  {
    background: "/images/道別/party.png",
    foreground: "/images/character.png",
    soundEffect: "海浪聲",
    description: "我不敢相信自己的眼睛",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "……妳？",
    },
  },
  {
    background: "/images/道別/party.png",
    foreground: "/images/character.png",
    soundEffect: "海浪聲",
    description:
      "一模一樣的淡漠語氣...\n一旦審判殿堂的門關上，那就是永遠的告別了，不是嗎？",
    conversation: {
      speaker: SpeakerType.XI,
      content: "怎麼了？你不是想見我嗎？",
    },
  },
  {
    background: "/images/道別/party.png",
    foreground: "/images/character.png",
    soundEffect: "海浪聲",
    conversation: {
      speaker: SpeakerType.XI,
      content: "我是你的一部分，不是嗎？",
    },
  },
  {
    background: "/images/道別/party.png",
    foreground: "/images/character.png",
    soundEffect: "海浪聲",
    description: "雖然也很想相信這是真的......",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "可是你明明說過，你是審判殿堂的一部分……我不是離開展覽館了嗎？",
    },
  },
  {
    background: "/images/道別/party.png",
    foreground: "/images/character.png",
    soundEffect: "海浪聲",
    description: "她指向我，語氣依舊平靜，卻帶著一種理所當然的意味",
    conversation: {
      speaker: SpeakerType.XI,
      content: "是啊，但審判殿堂是誰的呢？",
    },
  },
  {
    background: "/images/道別/party.png",
    foreground: "/images/character.png",
    soundEffect: "海浪聲",
    description: "她指向我，語氣依舊平靜，卻帶著一種理所當然的意味",
    conversation: {
      speaker: SpeakerType.XI,
      content: "這裡的一切，都來自你自己。你的內心當然可以主宰這個世界的變化",
    },
  },
  {
    background: "/images/道別/party.png",
    foreground: "/images/character.png",
    soundEffect: "海浪聲",
    description: "……所以，因為我想見她，所以她就出現了？",
    conversation: {
      speaker: SpeakerType.XI,
      content: "如果你願意這麼理解的話。",
    },
  },
  {
    background: "/images/道別/party.png",
    foreground: "/images/character.png",
    soundEffect: "海浪聲",
    description:
      "說的也是，我在你面前根本沒有秘密...從頭到尾，我的心思都被你看穿了",
  },
  {
    background: "/images/道別/party.png",
    foreground: "/images/character.png",
    soundEffect: "海浪聲",
    description: "海浪聲輕輕拍打岸邊，臉頰傳來灼燙感，或許是被夕陽照的吧",
  },
  {
    background: "/images/道別/party.png",
    foreground: "/images/character.png",
    soundEffect: "海浪聲",
    description: "不確定是不是錯覺，曦流一貫淡漠的臉上似乎閃過一絲瞭然的竊笑",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "……那這次，你還會離開嗎？",
    },
  },
  {
    background: "/images/道別/party.png",
    foreground: "/images/character.png",
    soundEffect: "海浪聲",
    conversation: {
      speaker: SpeakerType.XI,
      content: "只要你還願意與自己對話，我就不會消失。",
    },
  },
  {
    background: "/images/道別/party.png",
    foreground: "/images/character.png",
    soundEffect: "海浪聲",
    description:
      "我釋懷的笑了。\n沐浴在夕陽裡的她特別閃耀，尤其是她腰間有什麼東西狠狠地閃了一下",
  },
  {
    background: "/images/道別/party.png",
    foreground: "/images/character.png",
    soundEffect: "海浪聲",
    description: "曦流拆下腰上掛著的的沙漏握在手上",
    conversation: {
      speaker: SpeakerType.XI,
      content: "對了，我還要給你一樣東西。",
    },
  },
  {
    background: "/images/道別/party.png",
    foreground: "/images/character.png",
    soundEffect: "海浪聲",
    description: "是在審判殿堂裡，曦流帶在身上的沙漏",
    conversation: {
      speaker: SpeakerType.XI,
      content: "記得這個嗎？你想到為什麼它停住了嗎？",
    },
    buttons: [
      { content: "因為這裡的時間是靜止的。", jumpPage: 1 },
      { content: "因為我還沒做出決定。", jumpPage: 1 },
      { content: "因為這段旅程還沒結束。", jumpPage: 1 },
    ],
  },
  {
    background: "/images/道別/party.png",
    foreground: "/images/character.png",
    soundEffect: "海浪聲",
    description: "曦流點點頭，好像早就易料到我會這樣回答",
    conversation: {
      speaker: SpeakerType.XI,
      content: "那麼——你想讓它繼續流動嗎？",
    },
    buttons: [
      { content: "我已經準備好了。", jumpPage: 1 },
      { content: "我接受過去，也接受未來。", jumpPage: 1 },
      { content: "……時間該動了。", jumpPage: 1 },
    ],
  },
  {
    background: "/images/道別/party.png",
    foreground: "/images/character.png",
    soundEffect: "海浪聲",
    description:
      "一陣微風吹過，玻璃內的沙粒微微顫動；\n接著，隨著第一顆細沙慢慢落下，整個海灘的光線也產生變化——時間開始流動了。",
    conversation: {
      speaker: SpeakerType.XI,
      content: "看來，你已經找到自己的答案了。",
    },
  },
  {
    background: "/images/道別/party.png",
    foreground: "/images/character.png",
    soundEffect: "海浪聲、遠處的歡笑聲",
    description:
      "遠方的燈光閃爍，歡笑聲隱約飄來，海風吹過，帶走了夜色中的一點溫度。",
    conversation: {
      speaker: SpeakerType.XI,
      content: "好了，準備好要和你的淺層記憶重逢了嗎？",
    },
  },
  {
    background: "/images/道別/party.png",
    foreground: "/images/character.png",
    soundEffect: "派對音樂、歡笑聲",
    description:
      "曦流側身，背後的暖黃光韻籠罩的沙灘派對多了許多人。\n我感到塵封的記憶開始湧動",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "他們是……？",
    },
  },
  {
    background: "/images/道別/party.png",
    foreground: "/images/character.png",
    soundEffect: "派對音樂、熟悉的笑聲",
    description:
      "我情不自禁走向派對，聲音逐漸清晰，熟悉的語調、熟悉的笑聲。\n模糊氤醞的畫面轉為清晰，眼前是一場為我舉辦的盛大的告別派對。",
  },
  {
    background: "/images/道別/party.png",
    soundEffect: "派對音樂、熟悉的聲音",
    description:
      "眾多親朋好友圍坐一堂，燭光搖曳，每個人的表情都帶著溫暖的懷念。",
    conversation: {
      speaker: SpeakerType.FRIEND,
      content: "喂……我們都很想你啊，怎麼這麼久沒回來看看？",
    },
  },
  {
    background: "/images/道別/party.png",
    soundEffect: "派對音樂",
    conversation: {
      speaker: SpeakerType.PARTNER,
      content: "你這傢伙……說好了要一起闖蕩，怎麼這麼快就撇下我們了？",
    },
  },
  {
    background: "/images/道別/party.png",
    soundEffect: "派對音樂",
    conversation: {
      speaker: SpeakerType.MOM,
      content:
        "你小時候啊，總是喜歡拉著我的手，吵著要聽睡前故事……\n現在呢？還是會怕夜裡太安靜嗎？",
    },
  },
  {
    background: "/images/道別/party.png",
    soundEffect: "派對音樂",
    conversation: {
      speaker: SpeakerType.DAD,
      content: "你走過的路，我都看在眼裡。\n辛苦了，孩子。",
    },
  },
  {
    background: "/images/道別/party.png",
    soundEffect: "派對音樂",
    conversation: {
      speaker: SpeakerType.GRANDMOTHER,
      content:
        "還記得嗎？小時候你最愛吃阿嬤做的紅豆湯，每次都吵著要再添一碗。\n哪時候再回來？阿嬤有水果要給你捏！",
    },
  },
  {
    background: "/images/道別/party.png",
    soundEffect: "派對音樂",
    conversation: {
      speaker: SpeakerType.LOVER,
      content:
        "我總是說啊，你老是太逞強，什麼都悶在心裡。\n現在……終於肯好好看看自己的心了嗎？",
    },
  },
  {
    background: "/images/道別/party.png",
    soundEffect: "派對音樂",
    description:
      "我看著眼前的一切，每個人都那麼真實，那麼鮮活，時間彷彿從未在他們身上留下痕跡。\n心口傳來陣陣酸澀，像是遺忘已久的情感突然被撕裂開來。",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "……啊啊，我怎麼會忘了呢？",
    },
  },
  {
    background: "/images/道別/party.png",
    soundEffect: "派對音樂",
    description:
      "我的眼眶微熱，鼻尖發酸，他想伸手觸碰這些人，確認這一切是否真實。\n但手指只穿透了光與空氣——什麼也碰不到。",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "……原來，我是這麼想念你們啊。",
    },
  },
  {
    background: "/images/道別/party.png",
    soundEffect: "派對音樂",
    description: "不知何時，曦流已站在他的身旁。\n曦流語氣平靜卻溫柔：",
    conversation: {
      speaker: SpeakerType.XI,
      content:
        "這些聲音，從來都沒有離開過。\n他們一直都在，只是你願不願意聽見而已。",
    },
  },
  {
    background: "/images/道別/party.png",
    soundEffect: "派對音樂",
    description:
      "他們的話語、笑容、回憶，早已銘刻在我的生命裡，成為我的一部分。",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content:
        "以為自己走過了一場「關於自己的旅程」，卻發現，這一路上，我從來不是一個人。",
    },
  },
  {
    background: "/images/道別/party.png",
    soundEffect: "派對音樂",
    description:
      "曦流輕輕側身，向遠方的海面望去——\n金色夕陽映照在水面上，一艘小舟正靜靜地浮動著",
    conversation: {
      speaker: SpeakerType.XI,
      content: "該走了嗎？",
    },
  },
  {
    background: "/images/道別/party.png",
    soundEffect: "海浪聲",
    description: "我愣了一下，順著視線望向海面。\n這艘船，像是一直在等待著我",
  },
  {
    background: "/images/道別/party.png",
    soundEffect: "海浪聲",
    description:
      "我深吸一口氣，回頭再看了一眼——\n派對的燈光閃爍，熟悉的身影依舊在笑著、交談著，溫暖如初。",
  },
  {
    background: "/images/道別/party.png",
    soundEffect: "海浪聲",
    description:
      "或許，我永遠無法真正觸及他們，\n但那些話語、笑聲、記憶……已然流淌在血脈之中，陪伴我前行。",
  },
  {
    background: "/images/道別/party.png",
    soundEffect: "海浪聲",
    description: "而且，他們只是心中的幻影，我真正該走向的人，其實在另一邊。",
  },
  {
    background: "/images/道別/party.png",
    soundEffect: "海浪聲",
    description: "我轉過身，走向海岸。\n腳步踏入水中，冰涼的海浪輕輕掠過腳背",
    buttons: [{ content: "上船吧", jumpPage: 1 }],
  },
  {
    background: "/images/道別/party.png",
    soundEffect: "海浪聲",
    description: "我躍上船，抓住船槳，回頭最後望向曦流",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "……再見？",
    },
  },
  {
    background: "/images/道別/party.png",
    soundEffect: "海浪聲",
    description: "曦流微笑，搖搖頭",
    conversation: {
      speaker: SpeakerType.XI,
      content: "我一直都在啊。",
    },
  },
  {
    background: "/images/道別/party.png",
    soundEffect: "海浪聲",
    description: "我微怔，不過馬上反應過來",
    conversation: {
      speaker: SpeakerType.PLAYER,
      content: "是啊，我知道的。",
    },
  },
  {
    background: "/images/道別/party.png",
    soundEffect: "海浪聲",
    description:
      "我握緊船槳，輕輕一划，船緩緩離岸。\n夕陽倒映在水面，金光隨波蕩漾。",
  },

  // ----------------------------------------------------------------------------------

  {
    background: "/images/道別/boat-far.png",
    soundEffect: "海浪聲",
    description:
      "夕陽將我的身影拉得修長，波光粼粼的水面反射出我的剪影，\n而在漣漪的折射間，彷彿映出另一個世界的影子，但卻不清晰。",
  },
  {
    background: "/images/道別/boat-far.png",
    soundEffect: "海浪聲",
    description:
      "隨著船隨波漂遠，金紅色的餘暉逐漸籠罩整個畫面，光線越來越強，最終模糊成一片暖金色的光。",
  },
  {
    background: "bg-golden",
    soundEffect: "模糊的滴答聲",
    description:
      "隱約間，某種微弱的「滴——滴——」聲開始響起，最初模糊不清，像是從遙遠的另一個世界傳來，然後漸漸變得清晰。\n模糊的交談聲夾雜著：「……醒了嗎？」",
  },
  {
    background: "bg-white",
    soundEffect: "醫院儀器聲",
    description:
      "海浪聲與風聲逐漸淡去，只剩下醫院儀器的電子聲規律地響著。\n畫面仍停留在暖金色的波光中，漣漪細微地擴散著，彷彿仍在流動，最後緩緩淡出。",
  },
  {
    background: "bg-white",
    buttons: [
      { content: "這是夢嗎？還是……", jumpPage: 1 },
      { content: "……無論如何，這一次，我知道該往哪裡去了。", jumpPage: 1 },
    ],
  },
];
