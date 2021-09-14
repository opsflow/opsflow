<template>
  <div
    @click="checkClick"
    ref="projectWrap"
    class="project-wrap flex flex-column"
  >
    <form @submit.prevent="submitForm" class="project-content">
      <h1>New Project</h1>

      <!-- Project Info -->

      <div class="project-host flex flex-column">
        <h4>Project Type</h4>
        <div class="input flex flex-column">
          <label for="projectType">Project Type</label>
          <select required type="test" id="projectType" v-model="projectType">
            <option value="pipeline">Pipeline / Workflow</option>
            <option value="monitoring">Monitoring</option>
          </select>
        </div>
        <h4>Project Host</h4>
        <div class="input flex flex-column">
          <label for="projectHost">Project Host</label>
          <select required type="test" id="projectHost" v-model="projectHost">
            <option value="actions">Github Actions</option>
            <option value="azuredo">Azure DevOps</option>
            <option value="gitlab">GitLab</option>
            <option value="argo">Argo</option>
          </select>
        </div>

        <div class="input flex flex-column">
          <label for="projectHostAccessToken">Access Token</label>
          <input
            required
            type="text"
            id="projectHostAccessToken"
            v-model="projectHostAccessToken"
          />
        </div>

        <div class="input flex flex-column">
          <label for="projectHostWebhook">Event Webhook</label>
          <input
            required
            type="text"
            id="projectHostWebook"
            v-model="projectHostWebook"
          />
        </div>
      </div>

      <!-- Project Analysis -->

      <div class="project-analysis flex flex-column">
        <h4>Static Analysis</h4>
        <div class="input flex flex-column">
          <label for="staticAnalysisHost">Static Analysis Host</label>
          <input
            type="text"
            id="staticAnalysisHost"
            v-model="staticAnalysisHost"
          />
        </div>
        <div class="input flex flex-column">
          <label for="staticAnalysisProjectKey">Project Key</label>
          <input
            type="text"
            id="staticAnalysisProjectKey"
            v-model="staticAnalysisProjectKey"
          />
        </div>
        <div class="input flex flex-column">
          <label for="staticAnalysisToken">Access Token</label>
          <input
            type="text"
            id="staticAnalysisToken"
            v-model="staticAnalysisToken"
          />
        </div>
      </div>

      <!-- Project Location information -->

      <div class="project-info flex flex-column">
        <h4>Project Locations</h4>
        <div class="input flex flex-column">
          <label for="projectRepository">Repository</label>
          <input
            type="text"
            id="projectRepository"
            v-model="projectRepository"
          />
        </div>

        <div class="input flex flex-column">
          <label for="projectLink">Live Link</label>
          <input type="text" id="projectLink" v-model="projectLink" />
        </div>
      </div>

      <!-- Save Project -->

      <div class="save flex">
        <div class="left">
          <button @click="closeDraft" class="red">Cancel</button>
        </div>
        <div class="right flex">
          <button @click="saveDraft" class="dark-purple">Save Draft</button>
          <button @click="publishProject" class="purple">Create Project</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "projectModal",
  data() {
    return {
      projectType: null,
      projectHost: null,
      projectHostAccessToken: null,
      projectHostWebHook: null,
      staticAnalysisHost: null,
      staticAnalysisProjectKey: null,
      staticAnalysisToken: null,
      projectRepository: null,
      projectLink: null,
    };
  },
  methods: {
    ...mapMutations(["TOGGLE_PROJECT"]),
    closeDraft() {
      this.TOGGLE_PROJECT();
    },
  },
};
</script>

<style lang="scss" scoped>
.project-wrap {
  position: fixed;
  top: 0;
  left: 0;
  background-color: transparent;
  width: 100%;
  height: 100vh;
  overflow: scroll;
  @media (min-width: 900px) {
    left: 90px;
  }

  .project-content {
    position: relative;
    padding: 56px;
    max-width: 700px;
    width: 100%;
    background-color: #1f1626;
    color: #fff;
    box-shadow: 10px 4px 6px -1px (0, 0, 0, 0.2), 0 2px 4px -1px (0, 0, 0, 0.06);

    h1 {
      margin-bottom: 48px;
      color: #fff;
    }

    h3 {
      margin-bottom: 16px;
      font-size: 18px;
      color: #777f98;
    }

    h4 {
      color: #7c5dfa;
      font-size: 14px;
      margin-bottom: 24px;
    }
  }

  .input {
    margin-bottom: 24px;
  }

  label {
    font-size: 12px;
    margin-bottom: 6px;
  }

  input,
  select {
    width: 100%;
    background-color: #1e2139;
    color: #fff;
    border-radius: 4px;
    padding: 12px 4px;
    border: none;

    &:focus {
      outline: none;
    }
  }

  .save {
    margin-top: 60px;

    div {
      flex: 1;
    }

    .right {
      justify-content: flex-end;
    }
  }
}
</style>
