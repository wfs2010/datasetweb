<template>
  <el-table
      ref="multipleTable"
      :data="tableData"
      style="width: 100%;font-size:14px"
      @selection-change="handleSelectionChange">
    <el-table-column
        type="selection"
        width="55">
    </el-table-column>
    <el-table-column
        prop="chr"
        label="chr"
        width="50">
    </el-table-column>
    <el-table-column
        prop="pos"
        label="pos"
        width="90">
    </el-table-column>
    <el-table-column
        prop="ID"
        label="ID"
        width="90">
    </el-table-column>
    <el-table-column
        prop="refalt"
        label="ref/alt"
        width="60">
    </el-table-column>
    <el-table-column
        prop="genelocus"
        label="gene_locus"
        width="120">
    </el-table-column>
    <el-table-column
        prop="pvalue"
        label="P-value"
        width="90">
    </el-table-column>
    <el-table-column
        prop="tfmotif"
        label="tf_motif"
        width="80">
    </el-table-column>
    <el-table-column
        prop="topleadID"
        label="top_lead_ID"
        width="100">
    </el-table-column>
    <el-table-column
        prop="topleadp"
        label="top_lead_p"
        width="100">
    </el-table-column>
    <el-table-column
        prop="topleadrs"
        label="top_lead_rsquare"
        width="100">
    </el-table-column>
    <el-table-column
        prop="mark"
        label="mark"
        width="120">
    </el-table-column>
    <el-table-column
        prop="markbar"
        label="markbar"
        width="90">
      <template v-slot="scope">
        <img :src="scope.row.markbar" height="18"/>
      </template>
    </el-table-column>
    <el-table-column
        width="60">
      <el-button  icon="el-icon-caret-bottom" circle></el-button>
    </el-table-column>
    <el-table-column
        width="60">
      <el-button  icon="el-icon-download" circle></el-button>
    </el-table-column>
    <caret />
  </el-table>
</template>

<script>
import { reactive, toRefs } from 'vue'
import Caret from "@/views/Dataset/caret";

export default {
name: "bioble",
  components: {Caret},
  setup() {
const state = reactive({
  count: 0,
  tableData: [{
    chr: '9',
    pos: '22052734',
    ID: 'rs6475604',
    refalt:'T/C',
    genelocus:'CDKN2B-AS1',
    pvalue: '0.434',
    tfmotif: 'TAF2_HM07219',
    topleadID: 'rs1412829',
    topleadp: '2.19E-35',
    topleadrs: '0.904',
    mark: '3D,CON,CS',
    markbar: '/dataimg/a.bmp',
    checked: false
  },
    {
      chr: '9',
      pos: '22052734',
      ID: 'rs6475604',
      refalt:'T/C',
      genelocus:'CDKN2B-AS1',
      pvalue: '0.434',
      tfmotif: 'TAF2_HM07219',
      topleadID: 'rs1412829',
      topleadp: '2.19E-35',
      topleadrs: '0.904',
      mark: '3D,CON,CS',
      markbar: '/dataimg/a.bmp'
    },
    {
      chr: '9',
      pos: '22052734',
      ID: 'rs6475604',
      refalt:'T/C',
      genelocus:'CDKN2B-AS1',
      pvalue: '0.434',
      tfmotif: 'TAF2_HM07219',
      topleadID: 'rs1412829',
      topleadp: '2.19E-35',
      topleadrs: '0.904',
      mark: '3D,CON,CS',
      markbar: '/dataimg/a.bmp'
    }]
})
  function handleSelectionChange(val) {
    this.multipleSelection = val;
  }
return {
    ...toRefs(state),
    handleSelectionChange
}
}
}
</script>

<style scoped>
span.el-checkbox__inner{
  font-size: 28px;
  width: 28px;
  height: 28px;
}
.el-checkbox{
  padding: 0;
  margin: 0;
}
</style>
