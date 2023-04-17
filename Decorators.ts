function Repository(world: string) {
    return function (target: Function) {
      console.log(target);
      target.prototype.users = [];
      target.prototype.DecoratorCreateUser = function (entity: object) {
        target.prototype.users.push(entity);
      };
    };
  }
  
  export interface UseRepository {
    users: [];
    DecoratorCreateUser(entity: object): void;
  }
  
  @Repository("Coringão")
  export class UseRepository {}
  
  const user = new UseRepository();
  user.DecoratorCreateUser({ name: "Marco Verçosa" });
  user.DecoratorCreateUser({ name: "Marta Verçosa" });
  user.DecoratorCreateUser({ name: "Vitor Verçosa" });
  console.log(user.users);
  console.log("*******************");
  console.log("******************");
  console.log("*****************");
  
  /////////////////////////////////
  
  function Confirm(message: string) {
    return function (
      target: object,
      key: string | symbol,
      descriptor: PropertyDescriptor
    ) {
      const funcOriginal = descriptor.value;
      descriptor.value = function (...args: any[]) {
        if (window.confirm(message)) {
          return funcOriginal.apply(this, args);
        }
      };
      //console.log(target);
      //console.log(key);
      console.log(descriptor.value);
    };
  }
  
  export class UI {
    @Confirm("Este elemento será eliminado. Você tem certeza ? ")
    RemoveElement(element: any) {
      element.remove();
    }
  }
  
  const ui = new UI();
  console.log(ui.RemoveElement);
  
  const ul = document.createElement("ul");
  const persons = [{ name: "Marco" }, { name: "Marta" }, { name: "Vitor" }];
  
  persons.forEach((data) => {
    let li = document.createElement("li");
  
    li.addEventListener("click", () => {
      ui.RemoveElement(li);
    });
    li.textContent = data.name;
    ul.appendChild(li);
  });
  
  document.body.appendChild(ul);
  