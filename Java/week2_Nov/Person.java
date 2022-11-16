package coding;

public abstract class Person {
	private int age;
	private String name;
	
	public abstract void printName();
	
	public abstract void todo();
	
	public Person(String name) {
		this.name = name;
	}
	
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}	
}
