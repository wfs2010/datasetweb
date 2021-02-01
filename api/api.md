http请求方式: POST（请使用https协议）
https://xxxxx/gawdata/option1

| 参数 | 是否必须 | 说明 |
| :-----| ----: | :----: |
| species | 是 | 物种 |
| character | 是 | 性状 |
//返回json文件

```
{
    msg: "查询成功",
    result: {
        chr: "@integer(1, 30)",
        pos: "@integer(1000000, 99999999)",
        ID: "@integer(1000000,99999999)",
        ref_alt: "@cword(5)",
        gene_locus: "@cword(5)",
        P_value: '@float(1, 100, 4, 5)',
        tf_motif: "@cword(5)",
        top_lead_ID: "@cword(5)",
        top_lead_p: "@cword(5)",
        top_lead_rsquare: '@float(1, 100, 4, 5)',
        mark: "@cword(3)",
        avatar: "@image('20x20','red','#fff','avatar')",
        variantsummary :
        [
            {
            "chr": "@cword(5)",
            "pos": "@cword(5)",
            "ref": "@cword(5)",
            "alt": "@cword(5)",
            "AnnoType": "@cword(5)",
            "Consequence": "@cword(5)",
            "GeneID": "@cword(5)",
            "FeatureID": "@cword(5)",
            "GeneName": "@cword(5)",
            "SegwayFeature": "@cword(5)",
            "ID": "@cword(5)"
            },
            {
            "chr": "@cword(5)",
            "pos": "@cword(5)",
            "ref": "@cword(5)",
            "alt": "@cword(5)",
            "AnnoType": "@cword(5)",
            "Consequence": "@cword(5)",
            "GeneID": "@cword(5)",
            "FeatureID": "@cword(5)",
            "GeneName": "@cword(5)",
            "SegwayFeature": "@cword(5)",
            "ID": "@cword(5)"
            }
        ],
        TFannotation:[
            {
            "Factor":"@cword(5)",
            "ID":"@cword(5)",
            "Genotype":"@cword(5)",
            "Strand":"@cword(5)",
            "Start":"@cword(5)",
            "End":"@cword(5)",
            "Relative_Position":"@cword(5)",
            "Binding_Affinity_Change":"@cword(5)",
            "Allele_Orientation":"@cword(5)",
            "Variant_Affinity_Effect": "@cword(5)",
            "Effect_P_value": "@cword(5)",
            "avatar": "@image('200x200','red','#fff','avatar')"
            },
            {
            "Factor":"@cword(5)",
            "ID":"@cword(5)",
            "Genotype":"@cword(5)",
            "Strand":"@cword(5)",
            "Start":"@cword(5)",
            "End":"@cword(5)",
            "Relative_Position":"@cword(5)",
            "Binding_Affinity_Change":"@cword(5)",
            "Allele_Orientation":"@cword(5)",
            "Variant_Affinity_Effect": "@cword(5)",
            "Effect_P_value": "@cword(5)",
            "avatar": "@image('200x200','red','#fff','avatar')"
            }
        ],
        Histonemodification: [
            {
            "chr": "@cword(5)",
            "chromStart": "@cword(5)",
            "chromEnd": "@cword(5)",
            "Signal": "@cword(5)",
            "_logP": "@cword(5)",
            "ProfileSource": "@cword(5)",
            "CellLine": "@cword(5)",
            "CellType": "@cword(5)",
            "MarkType": "@cword(5)",
            "ID": "@cword(5)"
            },
            {
            "chr": "@cword(5)",
            "chromStart": "@cword(5)",
            "chromEnd": "@cword(5)",
            "Signal": "@cword(5)",
            "_logP": "@cword(5)",
            "ProfileSource": "@cword(5)",
            "CellLine": "@cword(5)",
            "CellType": "@cword(5)",
            "MarkType": "@cword(5)",
            "ID": "@cword(5)"
            }
        ],
        ConservationAggregation: [
            {
            "chr": "@cword(5)",
            "pos": "@cword(5)",
            "anc": "@cword(5)",
            "GC": "@cword(5)",
            "CpG": "@cword(5)",
            "scoreSegDup": "@cword(5)",
            "priPhCons": "@cword(5)",
            "mamPhCons": "@cword(5)",
            "verPhCons": "@cword(5)",
            "priPhyloP": "@cword(5)",
            "mamPhyloP": "@cword(5)",
            "verPhyloP": "@cword(5)",
            "GerpN": "@cword(5)",
            "GerpS": "@cword(5)",
            "bStatistic": "@cword(5)",
            "fitCons_all": "@cword(5)",
            "SiPhy": "@cword(5)",
            "ID": "@cword(5)",
            },
            {
            "chr": "@cword(5)",
            "pos": "@cword(5)",
            "anc": "@cword(5)",
            "GC": "@cword(5)",
            "CpG": "@cword(5)",
            "scoreSegDup": "@cword(5)",
            "priPhCons": "@cword(5)",
            "mamPhCons": "@cword(5)",
            "verPhCons": "@cword(5)",
            "priPhyloP": "@cword(5)",
            "mamPhyloP": "@cword(5)",
            "verPhyloP": "@cword(5)",
            "GerpN": "@cword(5)",
            "GerpS": "@cword(5)",
            "bStatistic": "@cword(5)",
            "fitCons_all": "@cword(5)",
            "SiPhy": "@cword(5)",
            "ID": "@cword(5)",
            }
        ],
        HiC: [
            {
            "chr_1": "@cword(5)",
            "start_1": "@cword(5)",
            "end_1": "@cword(5)",
            "chr_2": "@cword(5)",
            "start_2": "@cword(5)",
            "end_2": "@cword(5)",
            "score": "@cword(5)",
            "ID": "@cword(5)",
            avatar: "@image('200x200','red','#fff','avatar')"
            },
            {
            "chr_1": "@cword(5)",
            "start_1": "@cword(5)",
            "end_1": "@cword(5)",
            "chr_2": "@cword(5)",
            "start_2": "@cword(5)",
            "end_2": "@cword(5)",
            "score": "@cword(5)",
            "ID": "@cword(5)",
            avatar: "@image('200x200','red','#fff','avatar')"
            }
        ],
    }
}
  

```