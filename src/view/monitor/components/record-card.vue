<template>
    <Card :style="{width: width + 'px'}">
        <p slot="title">
            <Icon style="float: left;margin-left: 2px;"
            :type="renderDependIcon"
            size="22"
            :color="renderDependColor"></Icon>
            <span style="float: left;margin-left: 10px;" >
                {{record.jobName}}
            </span>
        </p>

        <a slot="extra" @click.prevent="lookupDependence" v-show="hasExtra">
            <Icon :type="icon" size="22"></Icon>
        </a>
        <p>
            <span>
                <b>执行结果：</b>
                <Tag v-if="record.status === -3" color="blue">未开始</Tag>
                <Tag v-else-if="record.status < 0" color="blue">等 待</Tag>
                <Tag v-else-if="record.status === 0" color="gold">执行中</Tag>
                <template v-else>
                    <Tag v-show="record.success === 0" color="red">失 败</Tag>
                    <Tag v-show="record.success === 1" color="green">成 功</Tag>
                    <Tag v-show="record.success === 2" color="warning">强 制</Tag>
                    <Tag v-show="record.success === 3" color="#80848f">超 时</Tag>
                    <Tag v-show="record.success === -1" color="default">未调度</Tag>
                </template>
            </span>
            <span style="float: right;">
                <b>执行方式：</b>
                <Tag v-show="record.execType === 0" color="green">自 动</Tag>
                <Tag v-show="record.execType === 1" color="blue">手 动</Tag>
                <Tag v-show="record.execType === 2" color="gold">手 动</Tag>
                <Tag v-show="record.execType === 3" color="default">重 跑</Tag>
                <Tag v-show="record.execType === 4" color="default">批 量</Tag>
                <Tag v-show="record.execType === 5" color="warning">强 制</Tag>
            </span>
        </p>
        <p>计划时间：{{formatter.formatDateTime(record.fireTime)}}</p>
        <p>开始时间：{{formatter.formatDateTime(record.startTime)}}</p>
        <p>结束时间：{{formatter.formatDateTime(record.endTime)}}</p>
    </Card>
</template>

<script>

import * as formatter from '@/libs/format'

export default {
  name: 'record-card',
  props: {
    scheduler: Object,
    stream: '',
    width: {
      type: Number,
      default: 290
    }
  },
  data () {
    return {
      record: {
        recordId: 0,
        status: 0,
        success: 0
      }
    }
  },
  methods: {
    lookupDependence () {
    }
  },
  computed: {
    hasExtra () {
      return this.record.recordId > 0
    },
    renderDependColor: function () {
      let color = ''

      if (this.record.status === -3) {
        /* 未开始 */
        color = '#5cadff'
      } else if (this.record.status < 0) {
        /* 等待 */
        color = '#ff9900'
      } else if (this.record.status === 0) {
        /* 运行中 */
        color = '#ff9900'
      } else if (this.record.success === 1) {
        /* 成功 */
        color = '#19be6b'
      } else if (this.record.success === 2) {
        /* 强制 */
        color = '#ed3f14'
      } else if (this.record.success === 3) {
        /* 失败 */
        color = '#ed3f14'
      }

      return color
    },
    renderDependIcon: function () {
      let icon = ''

      if (this.record.status === -3) {
        /* 未开始 */
        icon = 'md-play'
      } else if (this.record.status < 0) {
        /* 等待 */
        icon = 'ios-skipforward'
      } else if (this.record.status === 0) {
        /* 运行中 */
        icon = 'load-a'
      } else if (this.record.success === 1) {
        /* 成功 */
        icon = 'android-checkmark-circle'
      } else if (this.record.success === 2) {
        /* 强制 */
        icon = 'md-pause'
      } else if (this.record.success === 3) {
        /* 失败 */
        icon = 'close-round'
      }

      return icon
    },
    icon: function () {
      if (this.stream === 'up') {
        return 'arrow-up-c'
      } else if (this.stream === 'down') {
        return 'arrow-down-c'
      } else {
        return 'android-star'
      }
    }
  },
  watch: {
    scheduler (scheduler) {
      this.record = scheduler
    }
  }
}

</script>
