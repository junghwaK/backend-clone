package coding;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
	
//		Student stu = new Student (20, "코딩온");
//		stu.setSchool("코딩온 대학교);"
//		stu.setAge(21);
//		
//		stu.getAge();
//		sut.getSchool();
		Student2 st = new Student2(1,5);
		System.out.println(st.a);
		
		Person p = new Person(5,10);
		System.out.println(p.a);
	}
	
	public static class Person {
		public int a;
		public int b; 
		public Person(int a, int b) {
			this.a = a;
			this.b = b;
		}
	}
	public static class Student2 extends Person {
		public Student2(int abc, int b) {
			super();
			// new Person(abc, b)
		}
	}
	
}
