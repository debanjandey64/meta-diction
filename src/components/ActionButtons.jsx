import { useEffect, useState } from "react";
import { ACTION_CLASS_METHODS, performTask } from "../constants_helpers";
import ld from "lodash";

const ActionButtons = ({ outputTextArea, textInput }) => {
  const actionMethods = Object.keys(ACTION_CLASS_METHODS);

  const [actionClass, setActionClass] = useState(actionMethods[0]);
  const [selectedAction, setSelectedAction] = useState(null);

  useEffect(() => {
    setSelectedAction(null);
  }, [actionClass]);

  return (
    <div className="options-list">
      <div className="action-select">
        <select
          name="action-classes"
          value={actionClass}
          onChange={(e) => {
            setActionClass(e.target.value);
          }}
        >
          {actionMethods.map((aCl) => (
            <option key={aCl} value={aCl}>
              {ld.startCase(aCl)}
            </option>
          ))}
        </select>
      </div>

      <div className="actions-pane">
        <div className="action-set">
          {Object.keys(ACTION_CLASS_METHODS[actionClass]).map((act) => {
            return (
              <div key={act} className="actions">
                <input
                  type="radio"
                  name={actionClass}
                  id={act}
                  onClick={() => {
                    setSelectedAction(act);
                  }}
                />

                <label htmlFor={act}>
                  {ACTION_CLASS_METHODS[actionClass][act].title}
                </label>
              </div>
            );
          })}
        </div>

        <div className="operations">
          {selectedAction && (
            <>
              {ACTION_CLASS_METHODS[actionClass][selectedAction]?.options &&
                Object.keys(
                  ACTION_CLASS_METHODS[actionClass][selectedAction].options
                )?.map((attr) => (
                  <div key={attr} className="operation-opt">
                    <span>
                      {
                        ACTION_CLASS_METHODS[actionClass][selectedAction]
                          .options[attr].title
                      }
                    </span>
                    <input
                      type={
                        ACTION_CLASS_METHODS[actionClass][selectedAction]
                          .options[attr].type
                      }
                      id={attr}
                    />
                  </div>
                ))}

              <button
                className="action-button"
                onClick={() => {
                  performTask(
                    ACTION_CLASS_METHODS[actionClass][selectedAction].action,
                    textInput,
                    outputTextArea
                  );
                }}
              >
                {ld.startCase(selectedAction)}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActionButtons;
