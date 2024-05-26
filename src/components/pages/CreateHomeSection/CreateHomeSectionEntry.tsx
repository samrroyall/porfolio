import { IconButton, Input, TextDivider } from "../../shared";

interface CreateNewHomeSectionEntryProps {
  id: string;
}

const CreateNewHomeSectionEntry = ({ id }: CreateNewHomeSectionEntryProps) => (
  <div id={`entry-${id}`}>
    <TextDivider />
    <Input label="Entry Title" name={`entryTitle-${id}`} required={true} />
    <div id={`entry-${id}-subtitle-container`} class="p-2" />
    <div class="text-center">
      <IconButton
        icon={"\uf44d"}
        label="Add new subtitle"
        hx-post={`/admin/home/entry/subtitle/new?entryId=${id}`}
        hx-swap="beforeend"
        hx-target={`#entry-${id}-subtitle-container`}
        hx-trigger="click"
      />
    </div>
    <Input label="Entry Title Link" name={`entryTitleLink-${id}`} />
    <Input
      label="Entry Text"
      name={`entryText-${id}`}
      type="textarea"
      required={true}
      noResize={true}
    />
    <div class="text-center">
      <IconButton
        icon={"\udb80\uddb4"}
        label="Delete section entry"
        hx-on-click={`deleteEntry("${id}");`}
      />
    </div>
    <TextDivider />
  </div>
);

export default CreateNewHomeSectionEntry;
