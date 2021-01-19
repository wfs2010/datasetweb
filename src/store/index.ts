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
      console.log(para.selected1,para.selected2)
      axios.get('/gawdata').then(resp => {
        console.log(resp.data)
        context.commit('fetchData', resp.data)
      })
    }
  },
  modules: {
  }
})
