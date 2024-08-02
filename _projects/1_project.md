---
layout: page
title: CUMCM2023
description: 基于时序分析和模拟退火算法的蔬菜定价和补货决策优化
img: assets/img/12.jpg
importance: 1
category: work
related_publications: true
---

在交易市场中，商超扮演着核心的枢纽角色。为最大化盈利，其必须综合考虑供应侧与需求侧的平衡。面对多样的蔬菜品类，如何依据销售和需求数据建立精确模型，进而制定每日的补货策略，成为了一个核心挑战。基于背景和题目，本文依次建立了商品关联关系挖掘模型，以及以商超最大收益为目的的蔬菜品类日补货总量及定价模型，蔬菜单品补货量和定价模型。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1_销售量序列.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1_时间滞后性.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1_时序预测.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    蔬菜时间序列的分析，包括描述性统计的查看、WTLCC的计算模式以揭示引导-追随关系、时序预测补货量等。
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1_生命历程.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    以当天 t 为时间参考点，在前 2 天 t-2 进购的蔬菜品类 A 以原价进行售卖，卖出 n(t-1) 销量；在前 1 天 t-1 进行打折售卖，卖出 n’(t-1) 的销量，如果是直接扔掉而没有打折销售，则 n’(t-1) 取值为 0；在改天 t 不再售卖该批次的 A 品类。蔬菜品类 A 前 2 天的销售量之和即为品类 A 未损耗部分。
</div>

建立品类的补货定价的规划模型，采用模拟退火算法进行求解，以商超最大化收益作为规划目标，以利润率、打折率和补货满足率作为优化变量，约束为限制为利润率预测值与实际值的误差控制，以及补货满足率和打折率的值约束。进一步，建立单品补货定价的规划模型，引入关联规则分析算法挖掘蔬菜单品之间的相对重要程度，通过考虑蔬菜单品之间的关联性，使得重要的蔬菜能够有更大的概率被选择。

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/1_模拟退火优化.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/1_apriori改进.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
</div>


