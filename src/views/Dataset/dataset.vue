<template>
  <el-row>
    <el-col :span="2"><div></div></el-col>
    <el-col :span="22">
      <el-button class="option" v-on:click="option=0">GWAS</el-button>
      <el-button class="option" v-on:click="option=1">GWAS</el-button>
      <el-button class="option" v-on:click="option=2">QTL</el-button>
      <el-button class="option" v-on:click="option=3">QTL</el-button>
    </el-col>
  </el-row>
  <el-row style="margin-top: 10px">
    <el-col :span="2"><div></div></el-col>
    <el-form :inline="true" :model="formInline" class="demo-form-inline" v-if="option===0">
      <el-form-item label="Species:">
        <el-select v-model="formInline.human1" placeholder="Human">
          <el-option label="Human" value="human"></el-option>
          <el-option label="not Human" value="nonhuman"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label=" Character">
        <el-select v-model="formInline.cad1" placeholder="Coronary Artery Disease">
          <el-option label="Coronary Artery Disease" value="cad"></el-option>
          <el-option label="not Coronary Artery Disease" value="ncad"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" icon="el-icon-search">查询</el-button>
      </el-form-item>
    </el-form>
    <el-form :inline="true" :model="formInline" class="demo-form-inline" v-else-if="option===1">
      <el-form-item label="Species:">
        <el-select v-model="formInline.human2" placeholder="Human">
          <el-option label="Human" value="human"></el-option>
          <el-option label="not Human" value="nonhuman"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="SNP location information">
        <el-input
            placeholder="SNP"
            v-model="formInline.input1">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" icon="el-icon-search">查询</el-button>
      </el-form-item>
    </el-form>
    <el-form :inline="true" :model="formInline" class="demo-form-inline" v-else-if="option===2">
      <el-form-item label="Species:">
        <el-select v-model="formInline.human3" placeholder="Human">
          <el-option label="Human" value="human"></el-option>
          <el-option label="not Human" value="nonhuman"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label=" Character">
        <el-select v-model="formInline.cad2" placeholder="Coronary Artery Disease">
          <el-option label="Coronary Artery Disease" value="cad"></el-option>
          <el-option label="not Coronary Artery Disease" value="ncad"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" icon="el-icon-search">查询</el-button>
      </el-form-item>
    </el-form>
    <el-form :inline="true" :model="formInline" class="demo-form-inline" v-else>
      <el-form-item label="Species:">
        <el-select v-model="formInline.human4" placeholder="Human">
          <el-option label="Human" value="human"></el-option>
          <el-option label="not Human" value="nonhuman"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="QTL location information">
        <el-input
            placeholder="QTL"
            v-model="formInline.input2">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" icon="el-icon-search">查询</el-button>
      </el-form-item>
    </el-form>
  </el-row>
  <el-row>
    <el-col :span="24">
      <p style="text-align: center; font-size: 28px">Result</p>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="2"><div></div></el-col>
    <el-col :span="22">
      <el-button class="bottomoption" v-on:click="botoption=0">Summary table</el-button>
      <el-button class="bottomoption" v-on:click="botoption=1">LD expansion</el-button>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="2"><div></div></el-col>
    <el-col :span="22" v-if="botoption===0"><div><bioble /></div></el-col>
    <el-col :span="22" v-else><div><bioimg /></div></el-col>
  </el-row>
  <el-row style="padding-top: 10px">
    <el-col :span="13"><div></div></el-col>
    <el-col :span="11">
      <el-button icon="el-icon-download">Download the checked annotation</el-button>
      <el-button icon="el-icon-download" style="margin-left: 10px">Download all annotation&emsp;&emsp;</el-button>
    </el-col>
  </el-row>
</template>

<script>
import {reactive, toRefs} from 'vue'
import Bioble from "@/views/Dataset/bioble";
import Bioimg from "@/views/Dataset/bioimg";

export default {
  name: "dataset",
  components: {Bioimg, Bioble},
  setup() {
    const state = reactive({
      count: 0,
      formInline: {
        human1: '',
        human2: '',
        human3: '',
        human4: '',
        cad1: '',
        cad2: '',
        input1: '',
        input2: "",
      },
      option:0,
      botoption:0
    })

    function onSubmit() {
      console.log('submit!');
    }
    return {
      ...toRefs(state),
      onSubmit
    }
  }
}
</script>

<style scoped>
.el-button+.el-button{
  margin-left: 0;
}
.option.el-button:focus, .option.el-button:hover {
  color: #000000;
  border-color: #000000;
  background-color: #FF0033;
}

.bottomoption.el-button{
  background-color: #666666;
  color: #000000 ;
}

.bottomoption.el-button:focus, .bottom.el-button:hover {
  color: #000000;
  border-color: #000000;
  background-color: #FF0033;
}

</style>
