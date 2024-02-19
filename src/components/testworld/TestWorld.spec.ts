import { mount } from "@vue/test-utils";
import TestWorld from "@/components/testworld/TestWorld.vue";

describe("TestWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = mount(TestWorld, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
