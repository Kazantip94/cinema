<template>
    <input
        ref="input"
        type="date"
        :value="dateToYYYYMMDD(value)"
        @input="updateValue($event.target)"
        @focus="selectAll"
    />
</template>

<script>
export default {
    props: {
        value: {
            type: Date,
            default: () => new Date(),
        },
    },
    methods: {
        dateToYYYYMMDD(d) {
            return (
                d &&
                new Date(d.getTime() - d.getTimezoneOffset() * 60 * 1000)
                    .toISOString()
                    .split("T")[0]
            );
        },
        updateValue: function (target) {
            this.$emit("input", target.valueAsDate);
        },
        selectAll: function (event) {
            setTimeout(function () {
                event.target.select();
            }, 0);
        },
    },
};
</script>