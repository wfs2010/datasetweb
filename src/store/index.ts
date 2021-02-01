import { createStore } from 'vuex'
import axios from "axios";
export interface Variantsummary{
  chr: string;
  pos: string;
  ref: string;
  alt: string;
  AnnoType: string;
  Consequence: string;
  GeneID: string;
  FeatureID: string;
  GeneName: string;
  SegwayFeature: string;
  ID: string;
}
export interface TFannotation{
  "Factor": string;
  "ID": string;
  "Genotype": string;
  "Strand": string;
  "Start": string;
  "End": string;
  "Relative_Position": string;
  "Binding_Affinity_Change": string;
  "Allele_Orientation": string;
  "Variant_Affinity_Effect":  string;
  "Effect_P_value":  string;
  "avatar":  string;
}
export interface Histonemodification
{
  "chr":  string;
  "chromStart":  string;
  "chromEnd":  string;
  "Signal":  string;
  "_logP":  string;
  "ProfileSource":  string;
  "CellLine":  string;
  "CellType":  string;
  "MarkType":  string;
  "ID":  string;
}
export interface ConservationAggregation
{
  "chr":  string;
  "pos":  string;
  "anc":  string;
  "GC":  string;
  "CpG":  string;
  "scoreSegDup":  string;
  "priPhCons":   string;
  "mamPhCons":   string;
  "verPhCons":   string;
  "priPhyloP":   string;
  "mamPhyloP":   string;
  "verPhyloP":   string;
  "GerpN":   string;
  "GerpS":   string;
  "bStatistic":   string;
  "fitCons_all":   string;
  "SiPhy":   string;
  "ID":   string;
}
export interface HiC
{
  "chr_1": string;
  "start_1":  string;
  "end_1":  string;
  "chr_2":  string;
  "start_2":  string;
  "end_2":  string;
  "score":  string;
  "ID":  string;
  avatar:   string;
}
export interface Dataimg{
  avatar: string;
}
export interface GawData {
  chr: number;
  pos: number;
  ID: string;
  ref_alt: string;
  gene_locus: string;
  P_value: number;
  tf_motif: string;
  top_lead_ID: string;
  top_lead_p: string;
  top_lead_rsquare: number;
  mark: string;
  avatar: string;
  variantsummary: Variantsummary[];
  TFannotation: TFannotation[];
  Histonemodification: Histonemodification[];
  Conservation_Aggregation: ConservationAggregation[];
  HiC: HiC[];
}


interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}

export interface GawDatas{
  gawdatas: GawData[];
  LDexpansion: Dataimg[];
  user: UserProps;
}

export const testData ={
  list: [
    {
      chr: 10,
      pos: 6051481,
      ID: 10651167,
      ref_alt: "报群观内院",
      gene_locus: "林事少式去",
      P_value: 52.7838,
      tf_motif: "西除发记划",
      top_lead_ID: "权议况当和",
      top_lead_p: "器平业年今",
      top_lead_rsquare: 5.5071,
      mark: "消产听",
      avatar: "http://dummyimage.com/20x20/red/fff&text=avatar",
      variantsummary: [
        {
          chr: "没接却保据",
          pos: "白至办前节",
          ref: "儿江在十重",
          alt: "工据里那面",
          AnnoType: "制所细许头",
          Consequence: "细术五装百",
          GeneID: "或次南便事",
          FeatureID: "众需深得产",
          GeneName: "每结厂走离",
          SegwayFeature: "法易立叫团",
          ID: "问分看造它"
        },
        {
          chr: "特领支点命",
          pos: "海会用及听",
          ref: "得特青通最",
          alt: "风内现性率",
          AnnoType: "没圆再处极",
          Consequence: "求格从派此",
          GeneID: "亲江很制才",
          FeatureID: "什科也马无",
          GeneName: "照作易资持",
          SegwayFeature: "采资界式法",
          ID: "又片育选统"
        }
      ],
      TFannotation: [
        {
          Factor: "少争生严给",
          ID: "力天机律头",
          Genotype: "织经书三联",
          Strand: "则形八消里",
          Start: "断会红影属",
          End: "思和开反线",
          Relative_Position: "商法与火响",
          Binding_Affinity_Change: "么程较出量",
          Allele_Orientation: "发至一能便",
          Variant_Affinity_Effect: "门低每开状",
          Effect_P_value: "式第近放类",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        },
        {
          Factor: "决料华圆精",
          ID: "温还打等包",
          Genotype: "构计带始他",
          Strand: "南证京这它",
          Start: "白日治合作",
          End: "来律力口管",
          Relative_Position: "林交百真思",
          Binding_Affinity_Change: "得况感交各",
          Allele_Orientation: "观程几子也",
          Variant_Affinity_Effect: "格油却白期",
          Effect_P_value: "得育命直现",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        }
      ],
      Histonemodification: [
        {
          chr: "速西十专果",
          chromStart: "变记研少设",
          chromEnd: "近基性压且",
          Signal: "如办代完地",
          _logP: "二况线今合",
          ProfileSource: "青达别快亲",
          CellLine: "点般全收条",
          CellType: "团流程此头",
          MarkType: "内转际近石",
          ID: "于计去同那"
        },
        {
          chr: "由单他装片",
          chromStart: "老总料二青",
          chromEnd: "性子制记值",
          Signal: "教工又之那",
          _logP: "向从研又身",
          ProfileSource: "越县革场观",
          CellLine: "农治队般区",
          CellType: "还被步解她",
          MarkType: "再使率文义",
          ID: "联其五情容"
        }
      ],
      ConservationAggregation: [
        {
          chr: "片还学除办",
          pos: "小情知节传",
          anc: "里品论增安",
          GC: "价且克起该",
          CpG: "起别照研件",
          scoreSegDup: "志线见素过",
          priPhCons: "日现水开性",
          mamPhCons: "小眼话处局",
          verPhCons: "属价意积体",
          priPhyloP: "义身全向往",
          mamPhyloP: "龙上太何候",
          verPhyloP: "政发会压收",
          GerpN: "越力育文快",
          GerpS: "共十它选高",
          bStatistic: "难其日平更",
          fitCons_all: "划日常道众",
          SiPhy: "极自局细往",
          ID: "没号历没议"
        },
        {
          chr: "机想性建期",
          pos: "今习象资段",
          anc: "国看来结后",
          GC: "提好起确报",
          CpG: "成算定员东",
          scoreSegDup: "认千打都生",
          priPhCons: "回电资织办",
          mamPhCons: "很法信我天",
          verPhCons: "经风原因生",
          priPhyloP: "带后自观步",
          mamPhyloP: "在把划济每",
          verPhyloP: "又列马技造",
          GerpN: "带清斯通高",
          GerpS: "边公话非传",
          bStatistic: "压求江力接",
          fitCons_all: "里切革原而",
          SiPhy: "速然复响难",
          ID: "济习见拉四"
        }
      ],
      HiC: [
        {
          chr_1: "拉给大矿声",
          start_1: "精引构时极",
          end_1: "说没越市入",
          chr_2: "其便价道表",
          start_2: "类向百新造",
          end_2: "示思需过效",
          score: "者只维得被",
          ID: "必按位低见",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        },
        {
          chr_1: "将或知团类",
          start_1: "治深理应下",
          end_1: "并拉性引至",
          chr_2: "根发后展路",
          start_2: "今收员养低",
          end_2: "况话加存收",
          score: "京示种化易",
          ID: "族门须亲毛",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        }
      ]
    },
    {
      chr: 16,
      pos: 87186845,
      ID: 22423442,
      ref_alt: "南最那么正",
      gene_locus: "选状外最加",
      P_value: 81.05656,
      tf_motif: "意实该群西",
      top_lead_ID: "技政第叫思",
      top_lead_p: "与金装开再",
      top_lead_rsquare: 7.23568,
      mark: "长期识",
      avatar: "http://dummyimage.com/20x20/red/fff&text=avatar",
      variantsummary: [
        {
          chr: "受数指消运",
          pos: "了则传色信",
          ref: "系代称都心",
          alt: "三基从几八",
          AnnoType: "车成标时群",
          Consequence: "电学存所能",
          GeneID: "规张它论后",
          FeatureID: "人明去期包",
          GeneName: "说听标例件",
          SegwayFeature: "五还值每而",
          ID: "学准所传要"
        },
        {
          chr: "眼龙品变积",
          pos: "联马理查所",
          ref: "会满电再系",
          alt: "要变院则半",
          AnnoType: "六石厂有六",
          Consequence: "证酸自生重",
          GeneID: "区你活月存",
          FeatureID: "百县位群斗",
          GeneName: "证有开口保",
          SegwayFeature: "想响不具务",
          ID: "何属接万存"
        }
      ],
      TFannotation: [
        {
          Factor: "约原节叫较",
          ID: "九好农历构",
          Genotype: "满少叫处是",
          Strand: "七系设此叫",
          Start: "众事马面小",
          End: "切住成精形",
          Relative_Position: "了除据认深",
          Binding_Affinity_Change: "西关是说万",
          Allele_Orientation: "照称动论决",
          Variant_Affinity_Effect: "物改这众电",
          Effect_P_value: "步大领少团",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        },
        {
          Factor: "声布治报北",
          ID: "安今经矿片",
          Genotype: "金目放为起",
          Strand: "名但圆龙置",
          Start: "除积通东四",
          End: "点叫工构作",
          Relative_Position: "之常量受音",
          Binding_Affinity_Change: "认保路量步",
          Allele_Orientation: "九持白克次",
          Variant_Affinity_Effect: "值油证历东",
          Effect_P_value: "强来从内单",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        }
      ],
      Histonemodification: [
        {
          chr: "到等叫分先",
          chromStart: "才管一关历",
          chromEnd: "六南极究府",
          Signal: "花开金三再",
          _logP: "体为史此路",
          ProfileSource: "采识就内图",
          CellLine: "把作九土空",
          CellType: "收眼劳平又",
          MarkType: "矿点林长些",
          ID: "回等动事美"
        },
        {
          chr: "合能商们上",
          chromStart: "联西型结况",
          chromEnd: "开象门问山",
          Signal: "指对法小带",
          _logP: "布七小阶般",
          ProfileSource: "厂业才容光",
          CellLine: "要连厂导华",
          CellType: "青还化史究",
          MarkType: "统只示布还",
          ID: "成府装位海"
        }
      ],
      ConservationAggregation: [
        {
          chr: "率备阶表过",
          pos: "则眼别王种",
          anc: "元属水条是",
          GC: "受应老见美",
          CpG: "位强精少是",
          scoreSegDup: "济向复应展",
          priPhCons: "成己农路年",
          mamPhCons: "厂红调社劳",
          verPhCons: "空际别族称",
          priPhyloP: "光三二道非",
          mamPhyloP: "出面部光支",
          verPhyloP: "要整力除动",
          GerpN: "联自表件做",
          GerpS: "得即联需素",
          bStatistic: "则意说报先",
          fitCons_all: "美观全设研",
          SiPhy: "何比些许事",
          ID: "院合道放写"
        },
        {
          chr: "示直进候信",
          pos: "院济今门斗",
          anc: "者位要月外",
          GC: "酸领多程题",
          CpG: "道样包商山",
          scoreSegDup: "样住果情战",
          priPhCons: "要器器快运",
          mamPhCons: "至即化起保",
          verPhCons: "拉术器北作",
          priPhyloP: "事周去层便",
          mamPhyloP: "火具能育非",
          verPhyloP: "会定即争效",
          GerpN: "想压认值花",
          GerpS: "全写却红近",
          bStatistic: "用难给江物",
          fitCons_all: "海流影日按",
          SiPhy: "明院加把表",
          ID: "八称公关律"
        }
      ],
      HiC: [
        {
          chr_1: "院后安确每",
          start_1: "话物进青长",
          end_1: "被革志的外",
          chr_2: "观那化最千",
          start_2: "那体通历电",
          end_2: "快王认适行",
          score: "级期精较所",
          ID: "百律地九相",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        },
        {
          chr_1: "文斗圆团物",
          start_1: "化的月行别",
          end_1: "地什率战党",
          chr_2: "没亲拉往千",
          start_2: "立代音过阶",
          end_2: "力化次值治",
          score: "图技先更往",
          ID: "改外内别且",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        }
      ]
    },
    {
      chr: 10,
      pos: 27325350,
      ID: 94362375,
      ref_alt: "厂今清义江",
      gene_locus: "比白活气反",
      P_value: 60.27781,
      tf_motif: "象他叫交包",
      top_lead_ID: "现同带制关",
      top_lead_p: "进重院委示",
      top_lead_rsquare: 99.54748,
      mark: "办确民",
      avatar: "http://dummyimage.com/20x20/red/fff&text=avatar",
      variantsummary: [
        {
          chr: "比联装形度",
          pos: "与有本起运",
          ref: "走标信西战",
          alt: "加划住消日",
          AnnoType: "斗海己手员",
          Consequence: "识通角公口",
          GeneID: "住行难律温",
          FeatureID: "农电种们放",
          GeneName: "采运共了单",
          SegwayFeature: "个机证起适",
          ID: "见内际家用"
        },
        {
          chr: "热处合期记",
          pos: "多入先取及",
          ref: "路府便色提",
          alt: "快太样量速",
          AnnoType: "置识政器流",
          Consequence: "效员时况员",
          GeneID: "题养书员节",
          FeatureID: "对论线造正",
          GeneName: "白做研表加",
          SegwayFeature: "按知物劳北",
          ID: "记深放力准"
        }
      ],
      TFannotation: [
        {
          Factor: "可本代因第",
          ID: "因事效节易",
          Genotype: "写交划打进",
          Strand: "都研外及改",
          Start: "严民再同完",
          End: "与间条列除",
          Relative_Position: "知斯持选程",
          Binding_Affinity_Change: "级为识七务",
          Allele_Orientation: "和存被对去",
          Variant_Affinity_Effect: "这所何金那",
          Effect_P_value: "更每清确小",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        },
        {
          Factor: "口都济然志",
          ID: "温律青适程",
          Genotype: "军半值人如",
          Strand: "进总结西克",
          Start: "议每率王素",
          End: "真老合保作",
          Relative_Position: "低计区究克",
          Binding_Affinity_Change: "满建满联族",
          Allele_Orientation: "好位选因义",
          Variant_Affinity_Effect: "江少正县基",
          Effect_P_value: "音战速儿斯",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        }
      ],
      Histonemodification: [
        {
          chr: "期得导只带",
          chromStart: "儿证前军那",
          chromEnd: "除入见候组",
          Signal: "号主队难集",
          _logP: "府清京但变",
          ProfileSource: "利群传查义",
          CellLine: "相住使目开",
          CellType: "保实千民算",
          MarkType: "市加行条约",
          ID: "世新今机写"
        },
        {
          chr: "标队些红较",
          chromStart: "时社现过结",
          chromEnd: "主律第复转",
          Signal: "学气料属铁",
          _logP: "石子图京道",
          ProfileSource: "被住实近照",
          CellLine: "矿边众亲次",
          CellType: "期金更米相",
          MarkType: "整步界低构",
          ID: "例需又子极"
        }
      ],
      ConservationAggregation: [
        {
          chr: "号门地身酸",
          pos: "都光克影本",
          anc: "明些住山不",
          GC: "技些极联万",
          CpG: "五由两权民",
          scoreSegDup: "料层代设间",
          priPhCons: "很代列毛示",
          mamPhCons: "手再象引权",
          verPhCons: "团劳连日规",
          priPhyloP: "设等算空也",
          mamPhyloP: "格转准都白",
          verPhyloP: "小图革己得",
          GerpN: "商记历与色",
          GerpS: "立管设果几",
          bStatistic: "取先最最作",
          fitCons_all: "中除认而压",
          SiPhy: "复般切如满",
          ID: "上容积使果"
        },
        {
          chr: "图问又条平",
          pos: "品必准证有",
          anc: "亲验类省高",
          GC: "安做一走间",
          CpG: "转提住界中",
          scoreSegDup: "发识起备族",
          priPhCons: "花七队完经",
          mamPhCons: "最提习间形",
          verPhCons: "光第声太水",
          priPhyloP: "专确提党海",
          mamPhyloP: "管离法严格",
          verPhyloP: "术酸业流查",
          GerpN: "性队理参体",
          GerpS: "层却工十非",
          bStatistic: "往例文两据",
          fitCons_all: "许压家红调",
          SiPhy: "满该全积气",
          ID: "五身话林团"
        }
      ],
      HiC: [
        {
          chr_1: "市三易感心",
          start_1: "清断音团些",
          end_1: "起识温但就",
          chr_2: "位效安市真",
          start_2: "界并种万六",
          end_2: "得市机究复",
          score: "人高业标文",
          ID: "品住性斗示",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        },
        {
          chr_1: "主集常想己",
          start_1: "象院快各被",
          end_1: "们学类系石",
          chr_2: "代列分本此",
          start_2: "代委制儿里",
          end_2: "子严准体展",
          score: "金光下火委",
          ID: "联即状院往",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        }
      ]
    },
    {
      chr: 26,
      pos: 69945158,
      ID: 97379906,
      ref_alt: "高油收天专",
      gene_locus: "员火力学置",
      P_value: 39.2475,
      tf_motif: "办比信流研",
      top_lead_ID: "事论形低议",
      top_lead_p: "计江现速展",
      top_lead_rsquare: 33.9312,
      mark: "表设着",
      avatar: "http://dummyimage.com/20x20/red/fff&text=avatar",
      variantsummary: [
        {
          chr: "走派养本象",
          pos: "影活白山研",
          ref: "现且院己一",
          alt: "给地两习便",
          AnnoType: "府只他办精",
          Consequence: "军政数义府",
          GeneID: "业层白验你",
          FeatureID: "电细图然极",
          GeneName: "从素相相真",
          SegwayFeature: "委料特长少",
          ID: "格且价好阶"
        },
        {
          chr: "团主教装性",
          pos: "热分便直极",
          ref: "便至专件问",
          alt: "个形型不权",
          AnnoType: "达中存不几",
          Consequence: "成作价众好",
          GeneID: "说石工外能",
          FeatureID: "许织克完立",
          GeneName: "写克声须命",
          SegwayFeature: "确领都单海",
          ID: "声规研四研"
        }
      ],
      TFannotation: [
        {
          Factor: "任确严共适",
          ID: "办料道生维",
          Genotype: "活部按数向",
          Strand: "容争结便志",
          Start: "水通了较标",
          End: "它可们速复",
          Relative_Position: "表如省领入",
          Binding_Affinity_Change: "面快或报切",
          Allele_Orientation: "精相置外何",
          Variant_Affinity_Effect: "政专称史处",
          Effect_P_value: "造最北少说",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        },
        {
          Factor: "体实做被目",
          ID: "从活所并系",
          Genotype: "向家照酸变",
          Strand: "把治家制展",
          Start: "把队来先造",
          End: "小内无得断",
          Relative_Position: "下形且示场",
          Binding_Affinity_Change: "产世治他只",
          Allele_Orientation: "着去件能太",
          Variant_Affinity_Effect: "而都民许山",
          Effect_P_value: "术火生例入",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        }
      ],
      Histonemodification: [
        {
          chr: "儿一究与用",
          chromStart: "音家家验却",
          chromEnd: "被调心战色",
          Signal: "难回却手接",
          _logP: "千单全前定",
          ProfileSource: "或风公清委",
          CellLine: "带程回满持",
          CellType: "参清具风系",
          MarkType: "统连少据阶",
          ID: "她没队命构"
        },
        {
          chr: "高育众想确",
          chromStart: "志见音格美",
          chromEnd: "有引金管林",
          Signal: "利以去场眼",
          _logP: "那务思者段",
          ProfileSource: "资单七存四",
          CellLine: "此变西处有",
          CellType: "更切铁新里",
          MarkType: "平志快今线",
          ID: "干单使统极"
        }
      ],
      ConservationAggregation: [
        {
          chr: "联别今程问",
          pos: "么次利什于",
          anc: "定社共务前",
          GC: "断油步合而",
          CpG: "从思般地革",
          scoreSegDup: "下头几且全",
          priPhCons: "本系直油金",
          mamPhCons: "派备外对类",
          verPhCons: "队住京定每",
          priPhyloP: "知下设许研",
          mamPhyloP: "已位话共到",
          verPhyloP: "金所府造节",
          GerpN: "细格类运信",
          GerpS: "量没名气动",
          bStatistic: "多并队离变",
          fitCons_all: "小具油王住",
          SiPhy: "两林十水千",
          ID: "布调己准所"
        },
        {
          chr: "习斯器色级",
          pos: "子回速片条",
          anc: "称土马候的",
          GC: "界走公地五",
          CpG: "认加公始此",
          scoreSegDup: "写温必府议",
          priPhCons: "干究治中矿",
          mamPhCons: "流便五认小",
          verPhCons: "气照活确或",
          priPhyloP: "来美图许解",
          mamPhyloP: "资识线以清",
          verPhyloP: "强了革研识",
          GerpN: "少府农动和",
          GerpS: "步海出美没",
          bStatistic: "问道为其单",
          fitCons_all: "共九程种头",
          SiPhy: "龙应证没需",
          ID: "制干走并工"
        }
      ],
      HiC: [
        {
          chr_1: "各照具值得",
          start_1: "眼加收单火",
          end_1: "且现斯之安",
          chr_2: "属半律行门",
          start_2: "适劳强铁证",
          end_2: "法量强如步",
          score: "书局向证节",
          ID: "老气机的得",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        },
        {
          chr_1: "干规一平世",
          start_1: "切研复也收",
          end_1: "员花那元机",
          chr_2: "积周示情决",
          start_2: "素表人花回",
          end_2: "看要层更动",
          score: "求认们最受",
          ID: "认原会看县",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        }
      ]
    },
    {
      chr: 16,
      pos: 12035663,
      ID: 73000428,
      ref_alt: "族级眼统战",
      gene_locus: "且分维米就",
      P_value: 41.3552,
      tf_motif: "取着育别采",
      top_lead_ID: "工意市相热",
      top_lead_p: "局极龙所说",
      top_lead_rsquare: 46.1934,
      mark: "们眼人",
      avatar: "http://dummyimage.com/20x20/red/fff&text=avatar",
      variantsummary: [
        {
          chr: "维准育老花",
          pos: "议应电声进",
          ref: "写油下院效",
          alt: "样工而连革",
          AnnoType: "很基和入转",
          Consequence: "两书展全斗",
          GeneID: "上员级精目",
          FeatureID: "没热们高调",
          GeneName: "数部化他如",
          SegwayFeature: "程题己真规",
          ID: "养便都图样"
        },
        {
          chr: "千治干定比",
          pos: "时斗去是处",
          ref: "张委元收下",
          alt: "手儿也山及",
          AnnoType: "基观设把直",
          Consequence: "准放根增正",
          GeneID: "同东查什元",
          FeatureID: "市见江许认",
          GeneName: "光比水列克",
          SegwayFeature: "心条加月构",
          ID: "王济干只律"
        }
      ],
      TFannotation: [
        {
          Factor: "红省须着则",
          ID: "建式色二王",
          Genotype: "还的新就海",
          Strand: "养酸属设同",
          Start: "专有飞风总",
          End: "导性九安马",
          Relative_Position: "龙高设万安",
          Binding_Affinity_Change: "全划美些林",
          Allele_Orientation: "示才和转三",
          Variant_Affinity_Effect: "从查海次段",
          Effect_P_value: "题说社经月",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        },
        {
          Factor: "解管低年除",
          ID: "取和发相车",
          Genotype: "不义省整土",
          Strand: "管速而大资",
          Start: "共风今机京",
          End: "治命题战么",
          Relative_Position: "和消行属厂",
          Binding_Affinity_Change: "就质南传华",
          Allele_Orientation: "权万华用万",
          Variant_Affinity_Effect: "发中易引几",
          Effect_P_value: "身一给断开",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        }
      ],
      Histonemodification: [
        {
          chr: "书组铁教容",
          chromStart: "律切话总听",
          chromEnd: "建月己各导",
          Signal: "六体内做科",
          _logP: "每商门常置",
          ProfileSource: "当断南为强",
          CellLine: "自流间习之",
          CellType: "消理流义或",
          MarkType: "提整况得江",
          ID: "件快务成记"
        },
        {
          chr: "求太经同们",
          chromStart: "用度热于油",
          chromEnd: "料路水角立",
          Signal: "维使平维着",
          _logP: "展起它月亲",
          ProfileSource: "压何号上属",
          CellLine: "带必到间张",
          CellType: "决如何律务",
          MarkType: "转名展上育",
          ID: "器把志比应"
        }
      ],
      ConservationAggregation: [
        {
          chr: "先济值认听",
          pos: "调构利交效",
          anc: "色须世委文",
          GC: "活报技高民",
          CpG: "内前好务治",
          scoreSegDup: "构影名转口",
          priPhCons: "候在切安活",
          mamPhCons: "世我区活深",
          verPhCons: "属计专即里",
          priPhyloP: "基争带叫处",
          mamPhyloP: "所周离世织",
          verPhyloP: "度质养和候",
          GerpN: "好矿江般系",
          GerpS: "半效理采类",
          bStatistic: "我历数亲从",
          fitCons_all: "我相加前广",
          SiPhy: "团西比等边",
          ID: "龙反出作号"
        },
        {
          chr: "元况目且是",
          pos: "队每作干目",
          anc: "们器名走状",
          GC: "办红也高数",
          CpG: "受场设造习",
          scoreSegDup: "料还七它取",
          priPhCons: "复战场动革",
          mamPhCons: "住复制常提",
          verPhCons: "百实传外别",
          priPhyloP: "美书目象只",
          mamPhyloP: "政周家离国",
          verPhyloP: "干县天装基",
          GerpN: "规军复使他",
          GerpS: "相准务物叫",
          bStatistic: "专改样段立",
          fitCons_all: "做权比新因",
          SiPhy: "样林研温六",
          ID: "音是达等队"
        }
      ],
      HiC: [
        {
          chr_1: "活般音同日",
          start_1: "权红类度活",
          end_1: "金你但民相",
          chr_2: "却要正证斯",
          start_2: "始路取队单",
          end_2: "响自转产要",
          score: "管进她广照",
          ID: "车切素决总",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        },
        {
          chr_1: "传新共只但",
          start_1: "育江主根知",
          end_1: "战周克格动",
          chr_2: "它象被值容",
          start_2: "整队没再构",
          end_2: "难土政程度",
          score: "提许音导用",
          ID: "格革数劳路",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        }
      ]
    },
    {
      chr: 18,
      pos: 85970518,
      ID: 9229555,
      ref_alt: "东断也更少",
      gene_locus: "即并布酸越",
      P_value: 33.2466,
      tf_motif: "然包局效决",
      top_lead_ID: "结果定族信",
      top_lead_p: "会海眼第着",
      top_lead_rsquare: 49.52649,
      mark: "极机毛",
      avatar: "http://dummyimage.com/20x20/red/fff&text=avatar",
      variantsummary: [
        {
          chr: "或起便科交",
          pos: "称角厂老土",
          ref: "量越少重北",
          alt: "都亲山业决",
          AnnoType: "历气选斗多",
          Consequence: "王更别被际",
          GeneID: "但飞门七关",
          FeatureID: "年规平识响",
          GeneName: "技部共共量",
          SegwayFeature: "走流或规类",
          ID: "界群产九进"
        },
        {
          chr: "起三被与系",
          pos: "养或前江次",
          ref: "心积变出性",
          alt: "元一示之许",
          AnnoType: "达音风个火",
          Consequence: "律便但类引",
          GeneID: "最分参经记",
          FeatureID: "手拉确它其",
          GeneName: "正安命应些",
          SegwayFeature: "质采太整没",
          ID: "合七律正火"
        }
      ],
      TFannotation: [
        {
          Factor: "是解酸海好",
          ID: "先由发大果",
          Genotype: "严格不习比",
          Strand: "常反南况华",
          Start: "导度今构节",
          End: "第她基斗包",
          Relative_Position: "建使影织增",
          Binding_Affinity_Change: "是布七争毛",
          Allele_Orientation: "相工包导音",
          Variant_Affinity_Effect: "最际较农水",
          Effect_P_value: "确代布团做",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        },
        {
          Factor: "快眼百利通",
          ID: "快时快完传",
          Genotype: "它进权色接",
          Strand: "心专新人采",
          Start: "三在议心已",
          End: "它也布研报",
          Relative_Position: "领少火六作",
          Binding_Affinity_Change: "开八江圆现",
          Allele_Orientation: "过子道实见",
          Variant_Affinity_Effect: "最广国领革",
          Effect_P_value: "建备知治清",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        }
      ],
      Histonemodification: [
        {
          chr: "置技三会维",
          chromStart: "意验支合改",
          chromEnd: "记给说火收",
          Signal: "本文所型社",
          _logP: "头音十这该",
          ProfileSource: "都手党分养",
          CellLine: "具线并难来",
          CellType: "信务民过地",
          MarkType: "战群系月节",
          ID: "步查心高日"
        },
        {
          chr: "定经形对在",
          chromStart: "种商量成亲",
          chromEnd: "据没之太战",
          Signal: "主起带线路",
          _logP: "备维百求决",
          ProfileSource: "约书型立格",
          CellLine: "后题事准机",
          CellType: "军飞内验难",
          MarkType: "家大成自满",
          ID: "我象然近高"
        }
      ],
      ConservationAggregation: [
        {
          chr: "小门但质特",
          pos: "今又式机领",
          anc: "象土来计展",
          GC: "会花体选以",
          CpG: "半因准积料",
          scoreSegDup: "信场段表养",
          priPhCons: "国消任系中",
          mamPhCons: "展性选术公",
          verPhCons: "县都军意因",
          priPhyloP: "设所及因效",
          mamPhyloP: "金议把飞很",
          verPhyloP: "明连决集能",
          GerpN: "程例团打先",
          GerpS: "适南命意口",
          bStatistic: "办区越况太",
          fitCons_all: "育五素有整",
          SiPhy: "传入已是层",
          ID: "有半维龙参"
        },
        {
          chr: "例还始六变",
          pos: "亲经局应政",
          anc: "技看上不比",
          GC: "马作了元造",
          CpG: "信率正部受",
          scoreSegDup: "类上在党果",
          priPhCons: "造毛行报消",
          mamPhCons: "际口你我结",
          verPhCons: "了适算你年",
          priPhyloP: "些有养最回",
          mamPhyloP: "教产厂象已",
          verPhyloP: "那效类至下",
          GerpN: "专面油党例",
          GerpS: "革它收素应",
          bStatistic: "己思认过连",
          fitCons_all: "查劳通信马",
          SiPhy: "可打代王眼",
          ID: "用支业步月"
        }
      ],
      HiC: [
        {
          chr_1: "型龙究片住",
          start_1: "根老立江素",
          end_1: "改军青主放",
          chr_2: "等六节引己",
          start_2: "选长么收广",
          end_2: "省月二王运",
          score: "法其验所矿",
          ID: "目细片后上",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        },
        {
          chr_1: "参料制织共",
          start_1: "金放求次市",
          end_1: "增放石办江",
          chr_2: "记派战活公",
          start_2: "器件作代切",
          end_2: "节格直这引",
          score: "置合厂知农",
          ID: "深战边至写",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        }
      ]
    },
    {
      chr: 26,
      pos: 22531907,
      ID: 75566075,
      ref_alt: "响而织矿节",
      gene_locus: "往第技组业",
      P_value: 53.6493,
      tf_motif: "存风至表克",
      top_lead_ID: "具也高林精",
      top_lead_p: "或两走县它",
      top_lead_rsquare: 87.4488,
      mark: "起文铁",
      avatar: "http://dummyimage.com/20x20/red/fff&text=avatar",
      variantsummary: [
        {
          chr: "很存价完然",
          pos: "出他走外车",
          ref: "节新保构即",
          alt: "究今农究身",
          AnnoType: "都国划度会",
          Consequence: "力改指长断",
          GeneID: "存值越理直",
          FeatureID: "较己用收具",
          GeneName: "更持代才关",
          SegwayFeature: "并受划了当",
          ID: "改拉非办新"
        },
        {
          chr: "通就龙次离",
          pos: "能备给候看",
          ref: "去科去后马",
          alt: "马京百里号",
          AnnoType: "一干除容历",
          Consequence: "几这许观划",
          GeneID: "律白子三身",
          FeatureID: "层把或导论",
          GeneName: "完往分称质",
          SegwayFeature: "接育据拉外",
          ID: "统论科情打"
        }
      ],
      TFannotation: [
        {
          Factor: "引反任为积",
          ID: "须科五何解",
          Genotype: "米运关论今",
          Strand: "验备确众阶",
          Start: "千王题十何",
          End: "团必比么见",
          Relative_Position: "包种东照造",
          Binding_Affinity_Change: "事办化系过",
          Allele_Orientation: "把育声题备",
          Variant_Affinity_Effect: "入较强特着",
          Effect_P_value: "说已非儿国",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        },
        {
          Factor: "当思不边点",
          ID: "率完划机里",
          Genotype: "五加干铁段",
          Strand: "值热按情电",
          Start: "强里实少民",
          End: "照打际己是",
          Relative_Position: "红所得大动",
          Binding_Affinity_Change: "车声论着通",
          Allele_Orientation: "决设只把物",
          Variant_Affinity_Effect: "才江华即已",
          Effect_P_value: "号出油他些",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        }
      ],
      Histonemodification: [
        {
          chr: "将知亲住品",
          chromStart: "质在飞三口",
          chromEnd: "进度毛使即",
          Signal: "今则流相响",
          _logP: "元体眼越样",
          ProfileSource: "名基离听山",
          CellLine: "般七音公收",
          CellType: "具运党要而",
          MarkType: "相酸林转战",
          ID: "那对内面实"
        },
        {
          chr: "际且把政是",
          chromStart: "门统属往格",
          chromEnd: "天交开历阶",
          Signal: "等克打电己",
          _logP: "对色马利空",
          ProfileSource: "层年话几半",
          CellLine: "局加何头千",
          CellType: "什农龙团六",
          MarkType: "根张起据再",
          ID: "风很用型期"
        }
      ],
      ConservationAggregation: [
        {
          chr: "声术联克解",
          pos: "快京部王空",
          anc: "完根米研品",
          GC: "电叫在处力",
          CpG: "路子步去段",
          scoreSegDup: "研据龙领米",
          priPhCons: "原转面集性",
          mamPhCons: "采快儿须劳",
          verPhCons: "安用现出却",
          priPhyloP: "验技边量火",
          mamPhyloP: "给主两展确",
          verPhyloP: "际放内约亲",
          GerpN: "是观积制取",
          GerpS: "很回存名院",
          bStatistic: "每容进风又",
          fitCons_all: "计众书之感",
          SiPhy: "万大离铁西",
          ID: "识想月群深"
        },
        {
          chr: "生圆都于北",
          pos: "关完装明争",
          anc: "叫和提可路",
          GC: "究果支查交",
          CpG: "写放界三据",
          scoreSegDup: "战高难每称",
          priPhCons: "教就法本格",
          mamPhCons: "地打格号程",
          verPhCons: "连分制张严",
          priPhyloP: "金党点关原",
          mamPhyloP: "红想是这大",
          verPhyloP: "面装厂两山",
          GerpN: "政七日统选",
          GerpS: "一品队第他",
          bStatistic: "直期例联事",
          fitCons_all: "风件积机律",
          SiPhy: "式料世求识",
          ID: "及子加须真"
        }
      ],
      HiC: [
        {
          chr_1: "入说用意省",
          start_1: "必光温先细",
          end_1: "许圆界究该",
          chr_2: "公品应东取",
          start_2: "再因离二四",
          end_2: "上些火阶意",
          score: "保将别向自",
          ID: "知约到受土",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        },
        {
          chr_1: "需养而习单",
          start_1: "提派维日花",
          end_1: "快引非须看",
          chr_2: "斗定转别平",
          start_2: "设性亲先关",
          end_2: "等少际标建",
          score: "对着条想于",
          ID: "半江志已事",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        }
      ]
    },
    {
      chr: 26,
      pos: 88388889,
      ID: 25527951,
      ref_alt: "段引听量着",
      gene_locus: "和收增县方",
      P_value: 1.73264,
      tf_motif: "角美出前先",
      top_lead_ID: "的内领和即",
      top_lead_p: "各天设记算",
      top_lead_rsquare: 25.43649,
      mark: "用如南",
      avatar: "http://dummyimage.com/20x20/red/fff&text=avatar",
      variantsummary: [
        {
          chr: "原值色建术",
          pos: "收采争日水",
          ref: "金感据给级",
          alt: "局深生员族",
          AnnoType: "或专争计切",
          Consequence: "组后派程压",
          GeneID: "体时它验市",
          FeatureID: "力结名量时",
          GeneName: "难质识太我",
          SegwayFeature: "压选两身层",
          ID: "达边家化支"
        },
        {
          chr: "非最各已其",
          pos: "需是个分低",
          ref: "观政习何器",
          alt: "实社按铁角",
          AnnoType: "省经处件受",
          Consequence: "矿与转认许",
          GeneID: "代候重斯数",
          FeatureID: "面眼立消型",
          GeneName: "圆去适查解",
          SegwayFeature: "加也完信加",
          ID: "速期议团十"
        }
      ],
      TFannotation: [
        {
          Factor: "查速时因大",
          ID: "指带严议层",
          Genotype: "整基必式一",
          Strand: "取新风感去",
          Start: "称到维状现",
          End: "实县眼导那",
          Relative_Position: "六众格况列",
          Binding_Affinity_Change: "花方点而适",
          Allele_Orientation: "你九议众处",
          Variant_Affinity_Effect: "列见保条确",
          Effect_P_value: "就北由相非",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        },
        {
          Factor: "断提命置然",
          ID: "层史去之该",
          Genotype: "布育常能战",
          Strand: "斗公立示一",
          Start: "色机领见他",
          End: "设成包美史",
          Relative_Position: "白果命便任",
          Binding_Affinity_Change: "上称变声红",
          Allele_Orientation: "已然展千走",
          Variant_Affinity_Effect: "求学受此会",
          Effect_P_value: "才且三很们",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        }
      ],
      Histonemodification: [
        {
          chr: "满史象天石",
          chromStart: "参农过山王",
          chromEnd: "国组处设地",
          Signal: "律构织当大",
          _logP: "华阶两装单",
          ProfileSource: "集头权切厂",
          CellLine: "同问制重出",
          CellType: "每立引展青",
          MarkType: "气识地门到",
          ID: "情具样半正"
        },
        {
          chr: "全部什四且",
          chromStart: "清水然查克",
          chromEnd: "月团带但制",
          Signal: "太队是林青",
          _logP: "动们年活单",
          ProfileSource: "光都着中党",
          CellLine: "划土育提你",
          CellType: "北北难百往",
          MarkType: "而称三路家",
          ID: "头世快面产"
        }
      ],
      ConservationAggregation: [
        {
          chr: "理立只家证",
          pos: "指型交酸时",
          anc: "须此构老下",
          GC: "然取指观书",
          CpG: "作指员容成",
          scoreSegDup: "克七世很酸",
          priPhCons: "术史阶志过",
          mamPhCons: "美于所过三",
          verPhCons: "上们斗共战",
          priPhyloP: "却力次派它",
          mamPhyloP: "属南新少高",
          verPhyloP: "把来约说条",
          GerpN: "省易处是较",
          GerpS: "又层称计格",
          bStatistic: "员开思期们",
          fitCons_all: "儿百工做他",
          SiPhy: "院题还往满",
          ID: "之设重状龙"
        },
        {
          chr: "自候活必部",
          pos: "白果命常它",
          anc: "门问头准厂",
          GC: "电华现许实",
          CpG: "头越张志细",
          scoreSegDup: "那率两太什",
          priPhCons: "天石空品说",
          mamPhCons: "系界知求角",
          verPhCons: "入高准农王",
          priPhyloP: "农维小五打",
          mamPhyloP: "片活际亲育",
          verPhyloP: "飞除际厂改",
          GerpN: "去年就段叫",
          GerpS: "阶市小都新",
          bStatistic: "给备义东工",
          fitCons_all: "矿学解达规",
          SiPhy: "身织治铁型",
          ID: "元且先克真"
        }
      ],
      HiC: [
        {
          chr_1: "元月选有团",
          start_1: "属动第报本",
          end_1: "复志二处铁",
          chr_2: "少子问与立",
          start_2: "照车府越军",
          end_2: "指回市文入",
          score: "存年斯科斯",
          ID: "音具多构叫",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        },
        {
          chr_1: "建斗确将眼",
          start_1: "自军什收温",
          end_1: "音资查民方",
          chr_2: "前导不商办",
          start_2: "百决出万传",
          end_2: "可再府学建",
          score: "清没阶准安",
          ID: "社都间级包",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        }
      ]
    },
    {
      chr: 11,
      pos: 7606729,
      ID: 3036862,
      ref_alt: "政住好干京",
      gene_locus: "论要圆据其",
      P_value: 74.45783,
      tf_motif: "毛为提管管",
      top_lead_ID: "过每认总阶",
      top_lead_p: "争较育消该",
      top_lead_rsquare: 84.6977,
      mark: "离度出",
      avatar: "http://dummyimage.com/20x20/red/fff&text=avatar",
      variantsummary: [
        {
          chr: "外气马教基",
          pos: "着习状理各",
          ref: "北前华走节",
          alt: "领同在离议",
          AnnoType: "们千根两术",
          Consequence: "包者次七当",
          GeneID: "铁也很近义",
          FeatureID: "因为油列命",
          GeneName: "界打线决消",
          SegwayFeature: "经往报习石",
          ID: "备整接五已"
        },
        {
          chr: "非才然省系",
          pos: "立才共适期",
          ref: "管公可非示",
          alt: "张联格品她",
          AnnoType: "后取方对新",
          Consequence: "往置干支存",
          GeneID: "收属织决都",
          FeatureID: "事工通江万",
          GeneName: "技果而你列",
          SegwayFeature: "布办白度过",
          ID: "争科维队国"
        }
      ],
      TFannotation: [
        {
          Factor: "家选论九知",
          ID: "关眼际效据",
          Genotype: "快流包认相",
          Strand: "声走存决在",
          Start: "点将成府米",
          End: "际空体有数",
          Relative_Position: "气府京之科",
          Binding_Affinity_Change: "过声象该周",
          Allele_Orientation: "须等西事才",
          Variant_Affinity_Effect: "真集却其从",
          Effect_P_value: "火认照酸办",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        },
        {
          Factor: "第来片什治",
          ID: "安行引称气",
          Genotype: "了对求马自",
          Strand: "持起即养称",
          Start: "多采就与支",
          End: "改则存反实",
          Relative_Position: "影争按节口",
          Binding_Affinity_Change: "题严世除七",
          Allele_Orientation: "共布都中精",
          Variant_Affinity_Effect: "存深定许论",
          Effect_P_value: "美效交各通",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        }
      ],
      Histonemodification: [
        {
          chr: "细千给术机",
          chromStart: "深金需省达",
          chromEnd: "机受张对论",
          Signal: "是各期效水",
          _logP: "起再话分务",
          ProfileSource: "把报装查速",
          CellLine: "认农第较完",
          CellType: "器把原石些",
          MarkType: "她况明样子",
          ID: "表况期类开"
        },
        {
          chr: "由回整组又",
          chromStart: "南花两气就",
          chromEnd: "们近东算体",
          Signal: "构然车按列",
          _logP: "利心相历品",
          ProfileSource: "程知级美把",
          CellLine: "正况精是千",
          CellType: "般省育例题",
          MarkType: "子观名改原",
          ID: "些提具低等"
        }
      ],
      ConservationAggregation: [
        {
          chr: "间场具是名",
          pos: "国院和信电",
          anc: "果共群个自",
          GC: "它日权类千",
          CpG: "和建白样作",
          scoreSegDup: "克技思它运",
          priPhCons: "长十六车单",
          mamPhCons: "设约识书步",
          verPhCons: "办老体要而",
          priPhyloP: "此命意处点",
          mamPhyloP: "布层集铁由",
          verPhyloP: "放识受名期",
          GerpN: "片理济以维",
          GerpS: "较备率深往",
          bStatistic: "队金党号酸",
          fitCons_all: "则动学着政",
          SiPhy: "行事建求间",
          ID: "铁半步小正"
        },
        {
          chr: "标战义着战",
          pos: "要一位江着",
          anc: "认他完化总",
          GC: "规太得白来",
          CpG: "除写对或科",
          scoreSegDup: "管各米完色",
          priPhCons: "且出素国位",
          mamPhCons: "验真影即利",
          verPhCons: "天系关划况",
          priPhyloP: "农则政几使",
          mamPhyloP: "点严广问五",
          verPhyloP: "给类各那本",
          GerpN: "流设太海省",
          GerpS: "被白备反起",
          bStatistic: "行龙酸计通",
          fitCons_all: "去一品的价",
          SiPhy: "调五准热西",
          ID: "候亲离进织"
        }
      ],
      HiC: [
        {
          chr_1: "力状者合完",
          start_1: "引华数解示",
          end_1: "年习清区无",
          chr_2: "养会包至文",
          start_2: "提九明走会",
          end_2: "不候由象正",
          score: "强进名入组",
          ID: "再效元问下",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        },
        {
          chr_1: "从精转处整",
          start_1: "王划参族但",
          end_1: "如飞满亲解",
          chr_2: "那儿权高每",
          start_2: "周民候期话",
          end_2: "只再光济不",
          score: "规龙和也保",
          ID: "必层素便长",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        }
      ]
    },
    {
      chr: 8,
      pos: 69934952,
      ID: 88507572,
      ref_alt: "广专难放机",
      gene_locus: "角好部间口",
      P_value: 20.5582,
      tf_motif: "半通始何必",
      top_lead_ID: "华积持规公",
      top_lead_p: "马劳领济原",
      top_lead_rsquare: 58.51156,
      mark: "酸龙容",
      avatar: "http://dummyimage.com/20x20/red/fff&text=avatar",
      variantsummary: [
        {
          chr: "科领层正油",
          pos: "我备内关府",
          ref: "太之入装极",
          alt: "断分即前后",
          AnnoType: "六立百且文",
          Consequence: "王按存给间",
          GeneID: "风往海京内",
          FeatureID: "众队带什料",
          GeneName: "历准第议事",
          SegwayFeature: "千例红因厂",
          ID: "加单式往究"
        },
        {
          chr: "且九万程九",
          pos: "农称较反规",
          ref: "中容记适毛",
          alt: "阶导快越将",
          AnnoType: "联或这存只",
          Consequence: "加交机问多",
          GeneID: "议关小证色",
          FeatureID: "划点件千因",
          GeneName: "八日向说命",
          SegwayFeature: "导极展布规",
          ID: "化十反会是"
        }
      ],
      TFannotation: [
        {
          Factor: "素统有知完",
          ID: "前线走局问",
          Genotype: "住目维万听",
          Strand: "到非团法间",
          Start: "集飞此清研",
          End: "特委目式热",
          Relative_Position: "按分约市型",
          Binding_Affinity_Change: "写给属标加",
          Allele_Orientation: "流容导公即",
          Variant_Affinity_Effect: "果及他如无",
          Effect_P_value: "复住家由布",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        },
        {
          Factor: "统太备政不",
          ID: "达要火为格",
          Genotype: "内学须程七",
          Strand: "算统意人现",
          Start: "如效所造切",
          End: "主东联质县",
          Relative_Position: "大二行近上",
          Binding_Affinity_Change: "口查时候备",
          Allele_Orientation: "活等力三区",
          Variant_Affinity_Effect: "很快被业劳",
          Effect_P_value: "科包劳见除",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        }
      ],
      Histonemodification: [
        {
          chr: "问问自积联",
          chromStart: "进直提务自",
          chromEnd: "空治厂边队",
          Signal: "适并史集间",
          _logP: "正儿史花切",
          ProfileSource: "验好新部种",
          CellLine: "史转广八世",
          CellType: "写你从热成",
          MarkType: "律矿着其里",
          ID: "量队使圆规"
        },
        {
          chr: "边线子给增",
          chromStart: "可他压引证",
          chromEnd: "地并书专易",
          Signal: "走算便新个",
          _logP: "叫许消极劳",
          ProfileSource: "同来三离中",
          CellLine: "律般断向么",
          CellType: "相性少持往",
          MarkType: "来容资酸飞",
          ID: "定情此一料"
        }
      ],
      ConservationAggregation: [
        {
          chr: "引音斗照铁",
          pos: "工始际率并",
          anc: "利门量史斗",
          GC: "关几影米观",
          CpG: "置必长广在",
          scoreSegDup: "四按回比业",
          priPhCons: "在权命资着",
          mamPhCons: "广量来主马",
          verPhCons: "许带电红强",
          priPhyloP: "样把路海个",
          mamPhyloP: "身线革文证",
          verPhyloP: "文并率共回",
          GerpN: "质一你现标",
          GerpS: "办出示员较",
          bStatistic: "具周空包热",
          fitCons_all: "当党你国华",
          SiPhy: "己更例比育",
          ID: "局接写之院"
        },
        {
          chr: "划想得到类",
          pos: "公指在许约",
          anc: "事市几越达",
          GC: "正质验带拉",
          CpG: "许议发只单",
          scoreSegDup: "往节采着格",
          priPhCons: "接低基解品",
          mamPhCons: "决利么身有",
          verPhCons: "论内加活志",
          priPhyloP: "商备支者接",
          mamPhyloP: "局安农农转",
          verPhyloP: "京高都前采",
          GerpN: "天专容那些",
          GerpS: "着值好市很",
          bStatistic: "清存单基意",
          fitCons_all: "子争红转世",
          SiPhy: "专委江易立",
          ID: "周收名定社"
        }
      ],
      HiC: [
        {
          chr_1: "到感使起队",
          start_1: "据京作员存",
          end_1: "为克内同话",
          chr_2: "么该转电二",
          start_2: "再能型回建",
          end_2: "她更它据证",
          score: "政代天并史",
          ID: "太进听代得",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        },
        {
          chr_1: "车称速原电",
          start_1: "作进速易者",
          end_1: "拉导花任力",
          chr_2: "矿并完化科",
          start_2: "样速象江热",
          end_2: "并见联之知",
          score: "百广适很步",
          ID: "到品我里运",
          avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
        }
      ]
    }
  ],
  LDexpansion: [
    {
      avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
    },
    {
      avatar: "http://dummyimage.com/200x200/red/fff&text=avatar"
    }
  ]
}

export default createStore<GawDatas>({
  state: {
    gawdatas:[],
    LDexpansion: [],
    user: {isLogin: false},
  },
  mutations: {
    fetchData(state,rawData){
      state.gawdatas = rawData.list
      state.LDexpansion = rawData.LDexpansion
    }
  },
  actions: {
    fetchData(context,para) {
      // console.log(para.selected1,para.selected2)
      context.commit('fetchData',testData)
      // axios.get('/gawdata').then(resp => {
      //   console.log(resp.data)
      //   context.commit('fetchData', resp.data)
      // })
    }
  },
  modules: {
  }
})

// eslint-disable-next-line @typescript-eslint/camelcase

