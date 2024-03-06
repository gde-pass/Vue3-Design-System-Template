import { mount } from "@vue/test-utils";
import TestWorld from "@/components/testworld/TestWorld.vue";

describe("TestWorld.vue", () => {
  it("renders props.age when passed", () => {
    const age = 42;
    const wrapper = mount(TestWorld, {
      props: { age },
    });
    expect(wrapper.text()).toMatch(age.toString());
  });
});
